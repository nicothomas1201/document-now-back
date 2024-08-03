import { forwardRef, Module } from '@nestjs/common'
import { DocumentsController } from './documents.controller'
import { DocumentsService } from './documents.service'
import { GithubModule, GithubService } from '../github'
import { FilesModule, FilesService } from '../files'
import { PrismaService } from '@/services'
import { AiModule } from '../ai/ai.module'
import { AiService } from '../ai/ai.service'

@Module({
  imports: [forwardRef(() => AiModule), GithubModule, FilesModule],
  controllers: [DocumentsController],
  providers: [
    DocumentsService,
    GithubService,
    FilesService,
    PrismaService,
    AiService,
  ],
  exports: [DocumentsService],
})
export class DocumentsModule {}
