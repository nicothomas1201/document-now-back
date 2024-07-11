import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GithubModule } from './github'
import { ConfigModule } from '@nestjs/config'
import { config } from '../config'
import { DocumentsModule } from './documents'

@Module({
  imports: [
    GithubModule,
    DocumentsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
