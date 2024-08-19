import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { GithubService } from '../github'
import * as fs from 'fs'
import { FilesService } from '../files'
import { generatePrompt } from '@/utils'
import { DocLanguage } from './dto'
import { PrismaService } from '@/services'
import { AiService } from '../ai/ai.service'
import * as natural from 'natural'
import acorn from 'acorn'

@Injectable()
export class DocumentsService {
  constructor(
    private readonly githubService: GithubService,
    private readonly filesService: FilesService,
    private readonly prisma: PrismaService,
    private readonly aiService: AiService,
  ) {}

  // prisma
  async createUserDocument(
    title: string,
    content: string,
    username: string,
    repoName: string,
  ) {
    const contentCompress = await this.filesService.compressContent(content)
    return await this.prisma.documentation.create({
      data: {
        title,
        content: contentCompress as string,
        user: {
          connect: {
            username,
          },
        },
        repoName,
      },
    })
  }

  async findDocumentByRepoName(repoName: string, username: string) {
    return await this.prisma.documentation.findFirst({
      where: {
        repoName,
        user: {
          username,
        },
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

  async getDocAndCreateMd(repoName: string, username: string) {
    const doc = await this.findDocumentByRepoName(repoName, username)

    if (!doc) {
      throw new NotFoundException(
        `Document with repoName ${repoName} not found`,
      )
    }

    const path = await this.filesService.createMarkdownFile(
      this.filesService.decompressContent(doc.content),
      username,
      repoName,
    )

    return path
  }

  async getUsers() {
    return await this.prisma.user.findMany()
  }

  async manageProjectContent(
    token: string,
    repoName: string,
    owner: string,
    preview: boolean = false,
  ): Promise<string> {
    const data = await this.githubService.downloadProject(
      token,
      repoName,
      owner,
      preview,
    )

    const zipPath = this.filesService.getZipPath(repoName)

    // escribimos el zip
    fs.writeFileSync(zipPath, data)

    // ruta donde se extraerá el zip
    const extractPath = this.filesService.getExtractPath()

    await this.filesService.extractAndDeleteZip(zipPath, extractPath)

    return extractPath
  }

  async generateDocument(
    token: string,
    username: string, // solo se va a usar para guardar el documento con el usuario que lo generó
    owner: string, // se usa para obtener el verdadero owner del repo
    repoName: string,
    description: string,
    title: string,
    language: DocLanguage,
    preview: boolean = false,
  ) {
    const isReact = await this.githubService.isReactProject(
      token,
      owner,
      repoName,
    )

    if (!isReact) {
      throw new BadRequestException('The project is not a React project')
    }

    const extractPath = await this.manageProjectContent(
      token,
      repoName,
      owner,
      preview,
    )

    const techStack = []

    const files = await this.filesService.readFiles(extractPath, (content) => {
      const { dependencies, devDependencies } = JSON.parse(content)
      techStack.push(
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      )
    })

    const filesMapped = files
      .filter((file) => file.name != 'package.json')
      .map((file) => ({
        name: file.name,
        path: file.path,
        content: file.content,
      }))

    const code = this.getCodeOfFiles(filesMapped)

    const dataPrompts = generatePrompt(
      repoName,
      code,
      techStack,
      language,
      description,
    )

    await this.aiService.addPromptToQueue(
      dataPrompts,
      username,
      repoName,
      title,
    )

    if (!preview) {
      return {
        title,
        repoName,
        username,
        loading: true,
      }
    }
  }

  getCodeOfFiles(
    filesMapped: { name: string; content: string; path: string }[],
  ): { filesIntro: string; files: string[]; structure: string } {
    let chunk = 3
    const filesSplit = []
    let chunkFiles = []
    const introductionFiles = []
    let structure = ''

    for (let file of filesMapped) {
      structure = `${structure} \n ${file.path}`
      if (file.name.startsWith('.')) continue

      if (file.name.endsWith('.md') || file.name === 'package.json') {
        introductionFiles.push(file)
      }

      if (chunkFiles.length === chunk) {
        filesSplit.push(chunkFiles.slice())
        chunkFiles = []
      }

      chunkFiles.push(file)
    }

    if (chunkFiles.length > 0) filesSplit.push(chunkFiles.slice())

    console.log(filesSplit.length)

    const filesMain: string[] = filesSplit.map((files) => {
      return files.reduce((acc, file) => {
        return `${acc}\n\n File: ${file.name}\n Folder: ${file.path}\n ${file.content}`
      })
    })

    const filesIntro: string = introductionFiles.reduce((acc, file) => {
      return `${acc}\n\n File: ${file.name}\n Folder: ${file.path}\n ${file.content}`
    })

    const sendObject = {
      filesIntro,
      files: filesMain,
      structure,
    }

    return sendObject
  }

  async deleteDocumentById(id: string, username: string) {
    await this.filesService.deleteMarkdownFile(username, id)

    const data = await this.prisma.documentation.delete({
      where: {
        id: Number(id),
      },
    })

    return data
  }
}
