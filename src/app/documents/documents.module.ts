import { Module } from '@nestjs/common'
import { DocumentsController } from './documents.controller'
import { DocumentsService } from './documents.service'
import { GithubModule, GithubService } from '../github'
import { FilesModule, FilesService } from '../files'

@Module({
  imports: [GithubModule, FilesModule],
  controllers: [DocumentsController],
  providers: [DocumentsService, GithubService, FilesService],
})
export class DocumentsModule {}
