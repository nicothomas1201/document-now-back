import {
  Body,
  Controller,
  HttpException,
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
