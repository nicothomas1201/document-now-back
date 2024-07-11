import { Controller, Get } from '@nestjs/common'
import { GithubService } from './github.service'

@Controller({
  path: 'github',
  version: '1',
})
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get()
  getHello(): string {
    return this.githubService.getHello()
  }
}
