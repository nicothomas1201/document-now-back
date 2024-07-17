import {
  Body,
  Controller,
  Post,
  Headers,
  HttpStatus,
  HttpException,
  Get,
} from '@nestjs/common'
import { GithubService } from './github.service'
import { LoginDataDto } from './dto/login-data.dto'

@Controller({
  path: 'github',
  version: '1',
})
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Post('login')
  async loginUser(@Body() data: LoginDataDto) {
    try {
      const { code } = data

      const user = await this.githubService.loginUser(code)

      if (user.error) {
        return {
          message: 'Failed to login user',
          data: user,
        }
      }

      return {
        message: 'User logged in',
        data: user,
      }
    } catch (err) {
      throw new HttpException(
        'Failed to login user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  // TODO: Se debe hacer desde el front para evitar una llamada de api inecesaria
  @Get('repos')
  async getUserRepos(@Headers('authorization') token: string) {
    try {
      return this.githubService.getRepositories(token)
    } catch (err) {
      throw new HttpException(
        'Failed to get user repos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }
}
