import { Injectable } from '@nestjs/common'
import { createMistral } from '@ai-sdk/mistral'
import { generateText } from 'ai'
import { ConfigService } from '@nestjs/config'
import { GithubService } from '../github'
import * as fs from 'fs'
import { FilesService } from '../files'
import { filterTypesFiles } from '@/utils'
import { GeneratePublicDocumentDto } from './dto'
import { PrismaService } from '@/services'
import { RepositoryContent } from '../github/dto/repositories.dto'

enum STATUS_PROMISE {
  correct = 'fulfilled',
  error = 'rejected',
}
@Injectable()
export class DocumentsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly githubService: GithubService,
    private readonly filesService: FilesService,
    private readonly prisma: PrismaService,
  ) {}

  // prisma
  async createUserDocument(
    title: string,
    content: string,
    username: string,
    repoName: string,
  ) {
    return await this.prisma.documentation.create({
      data: {
        title,
        content,
        user: {
          connect: {
            username,
          },
        },
        repoName,
      },
    })
  }

  async findDocumentByRepoName(repoName: string) {
    return await this.prisma.documentation.findUnique({
      where: {
        repoName,
      },
    })
  }

  async getUserDocuments(username: string) {
    return await this.prisma.documentation.findMany({
      where: {
        user: {
          username,
        },
      },
    })
  }

  async getUserDocsWithRepos(token: string, username: string) {
    const docs = await this.getUserDocuments(username)
    const reposPromises = docs.map(
      (doc) =>
        new Promise(async (resolve, reject) => {
          try {
            const repoInfo = await this.githubService.getRepoInfo(
              token,
              doc.repoName,
              username,
            )

            resolve({
              repoInfo,
            })
          } catch (err) {
            reject(err)
          }
        }),
    )

    const response = await Promise.allSettled(reposPromises)

    const correctRepos = response
      .filter((res) => res.status === STATUS_PROMISE.correct)
      .map((res) => {
        const value = res.value as { repoInfo: RepositoryContent }
        return value.repoInfo
      })

    const errorRepos = response
      .filter((repo) => repo.status === STATUS_PROMISE.error)
      .map((repo) => repo.reason)

    // TODO: Hacer algo con los errorRepos
    console.log(errorRepos)

    return docs.map((doc) => ({
      ...doc,
      repoInfo: correctRepos.find(
        (repo) => repo.name === doc.repoName,
      ) as RepositoryContent,
    }))
  }

  // generate

  // TODO: hay que convertir el content en un base64
  async generateDocument(token: string, repoName: string, username: string) {
    const data = await this.githubService.downloadProject(
      token,
      repoName,
      username,
    )

    const zipPath = this.filesService.getZipPath(`${repoName}.zip`)

    // escribimos el zip
    fs.writeFileSync(zipPath, data)

    // ruta donde se extraerá el zip
    const extractPath = this.filesService.getExtractPath()

    await this.filesService.extractAndDeleteZip(zipPath, extractPath)

    const files = await this.filesService.readFiles(extractPath)

    const filteredFiles = filterTypesFiles(files).map((file) => ({
      name: file.name,
      path: file.path,
      content: file.content,
    }))

    const code = filteredFiles.reduce((acc, file) => {
      return `${acc}\n\n ${file.name}\n ${file.content}`
    }, '')

    // Lo que se va a codificar va a ser la respuesta al modelo de mistral, por ahora vamos a guardar y mostar el codigo
    const encodedContent = Buffer.from(code).toString('base64')

    await this.createUserDocument(
      `Docs of ${repoName}`,
      encodedContent,
      username,
      repoName,
    )

    // const text = await this.useAi(code, 'javascript')
    const text = encodedContent

    return {
      text,
    }
  }

  async generatePublicDocument({
    repoName,
    username,
  }: GeneratePublicDocumentDto) {
    const data = await this.githubService.downloadProject(
      '',
      repoName,
      username,
    )

    const zipPath = this.filesService.getZipPath(`${repoName}.zip`)

    // escribimos el zip
    fs.writeFileSync(zipPath, data)

    // ruta donde se extraerá el zip
    const extractPath = this.filesService.getExtractPath()

    await this.filesService.extractAndDeleteZip(zipPath, extractPath)

    const files = await this.filesService.readFiles(extractPath)
    const filteredFiles = filterTypesFiles(files).map((file) => ({
      name: file.name,
      path: file.path,
      content: file.content,
    }))

    const code = filteredFiles.reduce((acc, file) => {
      return `${acc}\n\n ${file.name}\n ${file.content}`
    }, '')

    // const text = await this.useAi(code, 'javascript')
    const text = code

    return {
      text,
    }
  }

  private async useAi(code: string, lang: string): Promise<string> {
    const prompt = `
      El siguiente es un fragmento de código escrito en ${lang}. Necesito una documentación profesional y detallada para este código. Por favor, incluye una descripción general, explicaciones para cada función y método, parámetros de entrada, valores de retorno, y ejemplos de uso si es posible.
      Código: ${code}
      Por favor, proporciona la documentación de la manera más clara y detallada posible. Gracias.
    `

    const model = createMistral({
      apiKey: this.configService.get('mistralKey'),
    })

    const { text } = await generateText({
      model: model('mistral-large-latest'),
      prompt,
    })

    return text
  }
}
