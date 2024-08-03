import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { AuthGuard } from '@nestjs/passport'
import { UserService } from '../user/user.service'
import { ConfigService } from '@nestjs/config'

@Controller({
  path: '/auth',
  version: '1',
})
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}
  @Get('/login')
  @UseGuards(AuthGuard('github'))
  async login() {
    return
  }

  @Get('/callback')
  @UseGuards(AuthGuard('github'))
  async callback(@Req() req, @Res() res) {
    const data = req.user
    const user = req.user.profile['_json']

    const payload: {
      sub: number
      username: string
    } = {
      sub: user.id,
      username: user.login,
    }

    const token = this.jwtService.sign(payload)

    if (!token) {
      throw new HttpException(
        'Failed create token',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }

    const userExists = await this.userService.findUnique({
      username: payload.username,
    })

    if (!userExists) {
      await this.userService.createUser({
        email: user.email,
        name: user.name,
        username: user.login,
        github_id: user.id,
        github_token: data.accessToken,
        access_token: token,
      })
    } else {
      await this.userService.updateUser(
        {
          username: userExists.username,
        },
        {
          github_token: data.accessToken,
          access_token: token,
        },
      )
    }

    // Aqui vamos a firmar un jwt y redirigir al cliente
    const redirectUrl = this.configService.get('REDIRECT_URL')
    res.redirect(`${redirectUrl}?token=` + token)
    return { token }
  }
}
