import { Body, Controller, Get, Post } from '@nestjs/common'
import { DocumentsService } from './documents.service'
import { GenerateDocumentDto } from './dto/generate-document'

@Controller({
  path: 'documents',
  version: '1',
})
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get()
  helloWorld() {
    return 'Hola desde documentos'
  }

  @Post('generate')
  async generateDocument(
    @Body() { code, lang }: GenerateDocumentDto,
  ): Promise<string> {
    return await this.documentsService.generateDocument(code, lang)
  }
}
