import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class GithubService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    return 'Hello Github!'
  }
}
