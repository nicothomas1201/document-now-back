import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Profile, Strategy } from 'passport-github2'
import { ExtractJwt, Strategy as PassportJwtStrategy } from 'passport-jwt'
import { UserService } from '../user/user.service'

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(configService: ConfigService) {
    super({
      clientID: configService.get<string>('github.clientId'),
      clientSecret: configService.get<string>('github.clientSecret'),
      callbackURL: 'http://localhost:3000/api/v1/auth/callback',
      scope: ['repo'],
    })
  }

  async validate(accessToken: string, _, profile: Profile) {
    return {
      accessToken,
      profile,
    }
  }
}

@Injectable()
export class JwtStrategy extends PassportStrategy(PassportJwtStrategy) {
  constructor(
    configService: ConfigService,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    })
  }

  async validate(payload: any) {
    const data = await this.userService.findUnique({
      username: payload.username,
    })

    return {
      id: payload.sub,
      username: payload.username,
      github_token: data.github_token,
    }
  }
}
