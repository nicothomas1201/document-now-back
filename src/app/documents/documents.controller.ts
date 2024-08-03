import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common'
import { DocumentsService } from './documents.service'
import { GenerateDocumentDto } from './dto'
import { User } from '@/decorators'
import { JwtGuard } from '@/guards'
import * as path from 'path'
import { existsSync } from 'fs'
import { Response } from 'express'

@Controller({
  path: 'docs',
  version: '1',
})
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get('user')
  @UseGuards(JwtGuard)
  async getDocuments(@User() user: UserDecorator) {
    return await this.documentsService.getUserDocuments(user.username)
  }

  @Get('user/:reponame')
  @UseGuards(JwtGuard)
  async getDocumentByRepoName(
    @Param('reponame') reponame: string,
    @User() user: UserDecorator,
    @Res() res: Response,
  ) {
    const path = await this.documentsService.getDocAndCreateMd(
      reponame,
      user.username,
    )

    res.sendFile(path)
  }

  @Get(':filename')
  @UseGuards(JwtGuard)
  async getDocument(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = path.join(process.cwd(), 'src', 'public', filename)

    if (!existsSync(filePath)) {
      throw new NotFoundException('File not found')
    }

    res.sendFile(filePath)
  }

  @Post('generate')
  @UseGuards(JwtGuard)
  async generateDocument(
    @Body() { repoName, description, lang, title, owner }: GenerateDocumentDto,
    @User() user: UserDecorator,
  ) {
    return await this.documentsService.generateDocument(
      user.github_token,
      user.username,
      owner,
      repoName,
      description,
      title,
      lang,
    )
  }

  @Post('generate/preview')
  async generatePublicDocument(
    @Body()
    { owner, repoName, title, description, lang }: GenerateDocumentDto,
  ) {
    return await this.documentsService.generateDocument(
      '', // token,
      '', // username
      owner, // owner
      repoName, // repoName
      description,
      title,
      lang,
      true,
    )
  }

  @Delete(':reponame')
  @UseGuards(JwtGuard)
  async deleteDocument(
    @Param('reponame') repoName: string,
    @User() user: UserDecorator,
  ) {
    return await this.documentsService.deleteDocumentByRepoName(
      repoName,
      user.username,
    )
  }
}
