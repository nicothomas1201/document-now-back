import { Controller, Get, UseGuards, Query } from '@nestjs/common'
import { GithubService } from './github.service'
import { JwtGuard } from '@/guards'
import { User } from '@/decorators'

@Controller({
  path: 'github',
  version: '1',
})
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('repos')
  @UseGuards(JwtGuard)
  // los repos que solo sean react
  async getUserRepos(
    @User() user: UserDecorator,
    @Query()
    query: {
      page: string
      per_page: string
    },
  ) {
    const { page, per_page } = query

    return this.githubService.getRepositories(
      user.github_token,
      Number(page),
      Number(per_page),
    )
  }

  @Get('user')
  @UseGuards(JwtGuard)
  async getUser(@User() user: UserDecorator) {
    const data = await this.githubService.getUser(user.github_token)
    return data
  }
}
