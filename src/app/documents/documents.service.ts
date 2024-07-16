import { Injectable } from '@nestjs/common'
import { createMistral } from '@ai-sdk/mistral'
import { generateText } from 'ai'
// import { templateCode } from '../../utils'
import { ConfigService } from '@nestjs/config'
import { GithubService } from '../github'
import { HttpService } from '@nestjs/axios'
import * as path from 'path'
import * as unziperr from 'unzipper'
import * as fs from 'fs'
import { File } from './dto'

@Injectable()
export class DocumentsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly githubService: GithubService,
    private readonly httpService: HttpService,
  ) {}

  // Se envia la url del repositorio y el token de autenticación, y obtenemos el contenido del repositorio
  async generateDocument(token: string, repoName: string) {
    try {
      const data = await this.githubService.downloadProject(token, repoName)

      // creamos la ruta donde se guarda el zip
      const rootPath = process.cwd()
      const zipPath = path.join(
        rootPath,
        'src',
        'temps',
        'repos',
        'zips',
        `${repoName}.zip`,
      )

      // escribimos el zip
      fs.writeFileSync(zipPath, data)

      // ruta donde se extraerá el zip
      const extractPath = path.join(zipPath, '..', '..', 'extracted')

      await this.extractAndDeleteZip(zipPath, extractPath)

      const files = await this.readFiles(extractPath)
      const filteredFiles = this.filterTypesFiles(files).map((file) => ({
        name: file.name,
        path: file.path,
        content: file.content,
      }))

      const code = filteredFiles.reduce((acc, file) => {
        return `${acc}\n\n ${file.name}\n ${file.content}`
      }, '')

      const text = await this.useAi(code, 'javascript')

      return {
        text,
      }
    } catch (err) {
      console.log(err)
    }
  }

  private filterTypesFiles(
    files: File[],
    notPermit: string[] = [
      'css',
      'html',
      'json',
      'md',
      'txt',
      'png',
      'jpg',
      'jpeg',
      'svg',
      'gif',
      'ico',
      'webp',
      'tiff',
      'bmp',
      'xml',
      'yml',
      'yaml',
      'lock',
      'lock.json',
      'lock.yaml',
      'lock.yml',
    ],
  ): File[] {
    return files.filter((file) => !notPermit.includes(file.type))
  }

  private async readFiles(rootDirPath: string): Promise<File[]> {
    const result: File[] = []
    const projectDir = fs.readdirSync(rootDirPath)
    const completePath = path.join(rootDirPath, projectDir[0])

    const readDir = async (dirPath: string) => {
      const files = await fs.promises.readdir(dirPath, { withFileTypes: true })

      for (const file of files) {
        const filePath = path.join(dirPath, file.name)

        if (file.isDirectory()) {
          await readDir(filePath)
        } else {
          const content = await fs.promises.readFile(filePath, 'utf-8')
          result.push({
            path: filePath,
            content,
            name: file.name,
            type: file.name.split('.').pop(),
          })
        }
      }
    }

    await readDir(completePath)
    await fs.promises.rm(completePath, { recursive: true, force: true })
    return result
  }

  private async extractAndDeleteZip(zipPath: string, extractPath: string) {
    return new Promise((resolve, reject) => {
      fs.createReadStream(zipPath)
        .pipe(
          unziperr.Extract({
            path: extractPath,
          }),
        )
        .on('close', () => {
          fs.unlink(zipPath, (err) => {
            if (err) {
              console.log('Error al eliminar el zip', err)
              reject(err)
            } else {
              console.log('Zip eliminado correctamente')
              resolve(true)
            }
          })
        })
        .on('error', (err) => {
          reject('Falió al extraer el zip ' + err)
        })
    })
  }

  // private async separteFilesAndDirs(data: RepositoryContent[], token: string, repoUrl: string) {}

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
