import { Injectable } from '@nestjs/common'
import { createMistral } from '@ai-sdk/mistral'
import { generateText } from 'ai'
import { ConfigService } from '@nestjs/config'
import { GithubService } from '../github'
import * as fs from 'fs'
import { FilesService } from '../files'
import { prompt } from '@/utils'
import { DocLanguage } from './dto'
import { PrismaService } from '@/services'

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
    const contetCompress = await this.filesService.compressContent(content)
    return await this.prisma.documentation.create({
      data: {
        title,
        content: contetCompress as string,
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
      select: {
        id: true,
        title: true,
        repoName: true,
        content: false,
        userId: true,
      },
    })
  }

  async getUserDocById(id: number) {
    return await this.prisma.documentation.findUnique({
      where: {
        id,
      },
    })
  }

  // async getUserDocsWithRepos(token: string, username: string) {
  //   const docs = await this.getUserDocuments(username)

  //   const reposPromises = docs.map(
  //     (doc) =>
  //       new Promise(async (resolve, reject) => {
  //         try {
  //           const repoInfo = await this.githubService.getRepoInfo(
  //             token,
  //             doc.repoName,
  //             username,
  //           )

  //           resolve({
  //             repoInfo,
  //           })
  //         } catch (err) {
  //           reject(err)
  //         }
  //       }),
  //   )

  //   const response = await Promise.allSettled(reposPromises)

  //   const correctRepos = response
  //     .filter((res) => res.status === STATUS_PROMISE.correct)
  //     .map((res) => {
  //       const value = res.value as { repoInfo: RepositoryContent }
  //       return value.repoInfo
  //     })

  //   const errorRepos = response
  //     .filter((repo) => repo.status === STATUS_PROMISE.error)
  //     .map((repo) => repo.reason)

  //   // TODO: Hacer algo con los errorRepos
  //   console.log(errorRepos)

  //   return docs.map((doc) => ({
  //     ...doc,
  //     repoInfo: correctRepos.find(
  //       (repo) => repo.name === doc.repoName,
  //     ) as RepositoryContent,
  //   }))
  // }

  async getDocAndCreateMd(reponame: string, username: string) {
    const doc = await this.findDocumentByRepoName(reponame)
    const path = await this.filesService.createMarkdownFile(
      this.filesService.decompressContent(doc.content),
      username,
      reponame,
    )

    return path
  }

  async isReactProject(
    token: string,
    username: string,
    reponame: string,
  ): Promise<boolean> {
    const { content } = await this.githubService.getRepoContent(
      token,
      username,
      reponame,
      'package.json',
    )

    const packageJson = JSON.parse(Buffer.from(content, 'base64').toString())

    return packageJson.dependencies?.react !== undefined
  }

  async generateDocument(
    token: string,
    username: string,
    repoName: string,
    descritpion: string,
    title: string,
    language: DocLanguage,
    preview: boolean = false,
  ) {
    const isReact = await this.isReactProject(token, username, repoName)

    if (!isReact) {
      return {
        message: 'El proyecto no esta construido con react',
      }
    }

    const data = await this.githubService.downloadProject(
      token,
      repoName,
      username,
      preview,
    )

    const zipPath = this.filesService.getZipPath(repoName)

    // escribimos el zip
    fs.writeFileSync(zipPath, data)

    // ruta donde se extraerá el zip
    const extractPath = this.filesService.getExtractPath()

    await this.filesService.extractAndDeleteZip(zipPath, extractPath)

    const techStack = []
    const files = await this.filesService.readFiles(extractPath, (content) => {
      const { dependencies, devDependencies } = JSON.parse(content)
      techStack.push(
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      )
    })

    const filesMaped = files.map((file) => ({
      name: file.name,
      path: file.path,
      content: file.content,
    }))

    const code = filesMaped.reduce((acc, file) => {
      return `${acc}\n\n File: ${file.name}\n ${file.content}`
    }, '')

    const dataPrompt = prompt(repoName, code, techStack, language, descritpion)

    const documentation = await this.useAi(dataPrompt)

    if (!preview) {
      return await this.createUserDocument(
        title,
        documentation,
        username,
        repoName,
      )
    }
  }

  async deleteDocumentByRepoName(repoName: string, username: string) {
    await this.filesService.deleteMarkdownFile(username, repoName)

    const data = await this.prisma.documentation.delete({
      where: {
        repoName,
      },
    })

    return data
  }

  private async useAi(prompt: string): Promise<string> {
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
