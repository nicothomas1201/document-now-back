import { Module } from '@nestjs/common'
import { DocumentsController } from './documents.controller'
import { DocumentsService } from './documents.service'
import { GithubModule, GithubService } from '../github'

@Module({
  imports: [GithubModule],
  controllers: [DocumentsController],
  providers: [DocumentsService, GithubService],
})
export class DocumentsModule {}
