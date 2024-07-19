import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GithubModule } from './github'
import { ConfigModule } from '@nestjs/config'
import { config } from '../config'
import { DocumentsModule } from './documents'
import { AuthModule } from './auth'
import { LoginMiddleware } from '@/middlewares'

@Module({
  imports: [
    AuthModule,
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginMiddleware).forRoutes('v1/auth/login')
  }
}
