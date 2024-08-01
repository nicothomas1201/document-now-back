import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common'
import { DocumentsService } from './documents.service'
import { GenerateDocumentDto, GeneratePublicDocumentDto } from './dto'
import { User } from '@/decorators'
import { JwtGuard } from '@/guards'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
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
    try {
      return await this.documentsService.getUserDocuments(user.username)
    } catch (err) {
      console.log(err)
      throw new HttpException(
        'Failed in get user docs with repos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  @Get('user/:reponame')
  @UseGuards(JwtGuard)
  async getDocumentByRepoName(
    @Param('reponame') reponame: string,
    @User() user: UserDecorator,
    @Res() res: Response,
  ) {
    try {
      const path = await this.documentsService.getDocAndCreateMd(
        reponame,
        user.username,
      )

      res.sendFile(path)
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        throw new HttpException(err.meta.cause, HttpStatus.NOT_FOUND)
      }

      throw new HttpException(
        'Failed in get document by reponame',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
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
    try {
      return await this.documentsService.generateDocument(
        user.github_token,
        user.username,
        owner,
        repoName,
        description,
        title,
        lang,
      )
    } catch (err) {
      console.log(err)
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Post('generate/preview')
  async generatePublicDocument(
    @Body()
    { username, repoName, title, description, lang }: GeneratePublicDocumentDto,
  ) {
    try {
      return await this.documentsService.generateDocument(
        '',
        username,
        repoName,
        '',
        description,
        title,
        lang,
        true,
      )
    } catch (err) {
      throw new HttpException(err.message, err.response.status)
    }
  }

  @Delete(':reponame')
  @UseGuards(JwtGuard)
  async deleteDocument(
    @Param('reponame') repoName: string,
    @User() user: UserDecorator,
  ) {
    try {
      return await this.documentsService.deleteDocumentByRepoName(
        repoName,
        user.username,
      )
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        throw new HttpException(err.meta.cause, HttpStatus.NOT_FOUND)
      }

      throw new HttpException(
        'Failed in delete document',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }
}
