import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common'
import { DocumentsService } from './documents.service'
import { GenerateDocumentDto } from './dto'

@Controller({
  path: 'docs',
  version: '1',
})
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post('generate')
  async generateDocument(
    @Body() { githubToken, repoName }: GenerateDocumentDto,
  ) {
    try {
      return await this.documentsService.generateDocument(githubToken, repoName)
    } catch (err) {
      console.log(err)
      throw new HttpException(
        'Failed to generate document',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }
}
