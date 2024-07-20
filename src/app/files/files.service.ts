import { Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
import * as unziperr from 'unzipper'
import { File } from './dto'

@Injectable()
export class FilesService {
  private reposTempPath = path.join(process.cwd(), 'src', 'temps', 'repos')

  async extractAndDeleteZip(zipPath: string, extractPath: string) {
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

  async readFiles(rootDirPath: string): Promise<File[]> {
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

  getZipPath(repoName: string): string {
    return path.join(this.reposTempPath, `${repoName}.zip`)
  }

  getExtractPath(): string {
    return path.join(this.reposTempPath, 'extracted')
  }
}
