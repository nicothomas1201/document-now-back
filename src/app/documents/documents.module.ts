import { Module } from '@nestjs/common'
import { DocumentsController } from './documents.controller'
import { DocumentsService } from './documents.service'
import { GithubModule, GithubService } from '../github'
import { FilesModule, FilesService } from '../files'
import { PrismaService } from '@/services'

@Module({
  imports: [GithubModule, FilesModule],
  controllers: [DocumentsController],
  providers: [DocumentsService, GithubService, FilesService, PrismaService],
})
export class DocumentsModule {}
