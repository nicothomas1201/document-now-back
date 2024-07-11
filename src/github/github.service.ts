import { Injectable } from '@nestjs/common'

@Injectable()
export class GithubService {
  getHello(): string {
    return 'Hello Github!'
  }
}
