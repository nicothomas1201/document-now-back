import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common'
import { DocumentsService } from './documents.service'
import { GenerateDocumentDto, GeneratePublicDocumentDto } from './dto'
import { User } from '@/decorators'
import { JwtGuard } from '@/guards'

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
      return await this.documentsService.getUserDocsWithRepos(
        user.github_token,
        user.username,
      )
    } catch (err) {
      console.log(err)
      throw new HttpException(
        'Failed in get user docs with repos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  @Post('generate')
  @UseGuards(JwtGuard)
  async generateDocument(
    @Body() { repoName }: GenerateDocumentDto,
    @User() user: UserDecorator,
  ) {
    try {
      return await this.documentsService.generateDocument(
        user.github_token,
        repoName,
        user.username,
      )
    } catch (err) {
      throw new HttpException(err.message, err.response.status)
    }
  }

  @Post('generate/preview')
  async generatePublicDocument(@Body() data: GeneratePublicDocumentDto) {
    try {
      return await this.documentsService.generatePublicDocument(data)
    } catch (err) {
      throw new HttpException(err.message, err.response.status)
    }
  }
}
