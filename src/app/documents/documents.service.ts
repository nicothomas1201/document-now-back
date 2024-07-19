import { Injectable } from '@nestjs/common'
import { createMistral } from '@ai-sdk/mistral'
import { generateText } from 'ai'
import { ConfigService } from '@nestjs/config'
import { GithubService } from '../github'
import * as path from 'path'
import * as fs from 'fs'
import { FilesService } from '../files'
import { filterTypesFiles } from '@/utils'
import { GeneratePublicDocumentDto } from './dto'

@Injectable()
export class DocumentsService {
  private reposTempPath = path.join(process.cwd(), 'src', 'temps', 'repos')

  constructor(
    private readonly configService: ConfigService,
    private readonly githubService: GithubService,
    private readonly filesService: FilesService,
  ) {}

  // TODO: Revisar porque no al parecer no tengo permisos para revisar proyectos privados
  async generateDocument(token: string, repoName: string, username: string) {
    const data = await this.githubService.downloadProject(
      token,
      repoName,
      username,
    )
    const zipPath = this.getZipPath(`${repoName}.zip`)
    // escribimos el zip
    fs.writeFileSync(zipPath, data)
    // ruta donde se extraerá el zip
    const extractPath = this.getExtractPath()
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

  async generatePublicDocument({
    repoName,
    username,
  }: GeneratePublicDocumentDto) {
    const data = await this.githubService.downloadProject(
      '',
      repoName,
      username,
    )

    const zipPath = this.getZipPath(`${repoName}.zip`)

    // escribimos el zip
    fs.writeFileSync(zipPath, data)

    // ruta donde se extraerá el zip
    const extractPath = this.getExtractPath()

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

  private getZipPath(repoName: string): string {
    return path.join(this.reposTempPath, `${repoName}.zip`)
  }

  private getExtractPath(): string {
    return path.join(this.reposTempPath, 'extracted')
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
