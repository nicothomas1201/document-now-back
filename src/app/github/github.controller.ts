import {
  Controller,
  HttpStatus,
  HttpException,
  Get,
  UseGuards,
  Query,
} from '@nestjs/common'
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
  async getUserRepos(
    @User() user: UserDecorator,
    @Query()
    query: {
      page: string
      per_page: string
    },
  ) {
    try {
      const { page, per_page } = query
      return this.githubService.getRepositories(
        user.github_token,
        Number(page),
        Number(per_page),
      )
    } catch (err) {
      console.log(err)
      throw new HttpException(
        'Failed to get user repos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  @Get('user')
  @UseGuards(JwtGuard)
  async getUser(@User() user: UserDecorator) {
    try {
      const data = await this.githubService.getUser(user.github_token)
      return data
    } catch (err) {
      console.log(err)
      throw new HttpException(
        'Failed to get user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }
}
