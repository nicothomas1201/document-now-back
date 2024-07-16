import { Module } from '@nestjs/common'
import { GithubController } from './github.controller'
import { GithubService } from './github.service'
import { HttpModule } from '@nestjs/axios'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return { baseURL: configService.get<string>('API_BASE_URL') }
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [GithubController],
  providers: [GithubService],
  exports: [GithubService, HttpModule],
})
export class GithubModule {}
