import { Body, Controller, Post } from '@nestjs/common'
import { GithubService } from './github.service'
import { LoginDataDto } from './dto/login-data.dto'

@Controller({
  path: 'github',
  version: '1',
})
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  // TODO: Crear un middleware para validar los errores de la petición
  @Post('login')
  async loginUser(@Body() data: LoginDataDto) {
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
  }
}
