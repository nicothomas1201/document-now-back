import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
// import { AppService } from './app.service'
import { GithubModule } from './github'
import { ConfigModule } from '@nestjs/config'
import { config } from '../config'
import { DocumentsModule } from './documents'
import { AuthModule } from './auth'
import { LoginMiddleware } from '@/middlewares'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'
import { APP_FILTER } from '@nestjs/core'
import {
  AllExceptionFilter,
  HttpExceptionFilter,
  PrismaKnownExceptionFilter,
  PrismaUnknownExceptionFilter,
} from '@/filters'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'storage'),
      serveRoot: '/docs',
    }),
    AuthModule,
    GithubModule,
    DocumentsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionFilter },
    { provide: APP_FILTER, useClass: PrismaKnownExceptionFilter },
    { provide: APP_FILTER, useClass: PrismaUnknownExceptionFilter },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginMiddleware).forRoutes('v1/auth/login')
  }
}
