import { Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
import * as unziperr from 'unzipper'
import { File } from './dto'
import { brotliCompress, brotliDecompressSync } from 'zlib'

@Injectable()
export class FilesService {
  private reposTempPath = path.join(process.cwd(), 'temps', 'repos')
  private mdPath = path.join(process.cwd(), 'src', 'storage')

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

  compressContent(content: string): Promise<string> {
    return new Promise((resolve, reject) => {
      brotliCompress(content, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result.toString('base64'))
        }
      })
    })
  }

  decompressContent(content: string): string {
    return brotliDecompressSync(Buffer.from(content, 'base64')).toString(
      'utf-8',
    )
  }

  async createMarkdownFile(
    content: string,
    username: string,
    reponame: string,
  ): Promise<string> {
    const dirPath = path.join(this.mdPath, username)
    const exists = fs.existsSync(dirPath)

    if (!exists) fs.mkdirSync(dirPath)

    const completePath = path.join(dirPath, `${reponame}.md`)

    fs.writeFileSync(completePath, content)

    return completePath
  }

  async deleteMarkdownFile(
    username: string,
    reponame: string,
  ): Promise<boolean> {
    const dirPath = path.join(this.mdPath, username)
    const completePath = path.join(dirPath, `${reponame}.md`)
    const exists = fs.existsSync(completePath)

    if (!exists) return false

    await fs.promises.rm(completePath)

    return true
  }

  async readFiles(
    rootDirPath: string,
    cb: (content: string) => void,
  ): Promise<File[]> {
    const multimedia = [
      // Imágenes Raster
      'jpg',
      'jpeg',
      'png',
      'gif',
      'bmp',
      'tiff',
      'tif',
      'psd',
      'webp',
      'heic',
      'heif',
      'raw',
      'ico',
      'dds',
      'exr',
      'tga',
      'pcx',
      'svgz',
      'avif',

      // Imágenes Vectoriales
      'svg',
      'ai',
      'eps',
      'pdf',
      'cdr',

      // Formatos de Imágenes 3D
      '3ds',
      'obj',
      'fbx',
      'stl',
      'dae',

      // Formatos Específicos o Menos Comunes
      'xcf',
      'dcm',
      'djvu',
      'dzi',
      'jp2',
      'jxr',
      'apng',

      // Fuentes TrueType y OpenType
      'ttf',
      'otf',

      // Fuentes PostScript
      'pfb',
      'pfm',
      'afm',
      'ps',

      // Fuentes Web
      'woff',
      'woff2',
      'eot',

      // Fuentes Bitmap
      'fon',
      'bdf',
      'fnt',

      // Otras Extensiones de Fuentes
      'suit',
      'dfont',
      'gdf',
      'psf',

      // Formatos de Audio y Video
      'mp4',
      'mp3',
      'wav',
      'avi',
      'mov',
      'wmv',
      'flv',
      'mkv',
      'webm',
      'm4v',
      '3gp',
      'mxf',
      'ts',
    ]

    const lock = [
      'package-lock.json',
      'yarn.lock',
      'pnpm-lock.yaml',
      'shrinkwrap.yaml',
      'bun.lockb',
    ]

    const unreadFiles = ['tsconfig', 'vite.config']

    const unreadFolders = ['node_modules', 'dist', 'public', 'dist-ssr']

    const result: File[] = []
    const projectDir = fs.readdirSync(rootDirPath)
    const completePath = path.join(rootDirPath, projectDir[0])

    const readDir = async (dirPath: string) => {
      if (unreadFolders.includes(dirPath)) return

      const files = await fs.promises.readdir(dirPath, { withFileTypes: true })

      for (const file of files) {
        const filePath = path.join(dirPath, file.name)

        if (file.isDirectory()) {
          await readDir(filePath)
        } else {
          const fileExtension = file.name.split('.').pop()

          // Si es un archivo multimedia no se lee
          if (
            !multimedia.includes(fileExtension) &&
            !lock.includes(file.name) &&
            !unreadFiles.includes(file.name)
          ) {
            const content = await fs.promises.readFile(filePath, 'utf-8')

            if (file.name === 'package.json') {
              cb(content)
            }

            result.push({
              path: filePath,
              content,
              name: file.name,
              type: file.name.split('.').pop(),
            })
          }
        }
      }
    }

    await readDir(completePath)
    await fs.promises.rm(completePath, { recursive: true, force: true })
    return result
  }

  getDocsPath(): string {
    return path.join(process.cwd(), 'src', 'storage', 'repos')
  }

  getZipPath(repoName: string): string {
    return path.join(this.reposTempPath, 'zip', `${repoName}.zip`)
  }

  getExtractPath(): string {
    return path.join(this.reposTempPath, 'extracted')
  }
}
