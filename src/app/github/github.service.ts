import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class GithubService {
  constructor(private readonly configService: ConfigService) {}

  async loginUser(code: string) {
    if (code === '') throw new Error('Code is required')

    const baseUrl = 'https://github.com/login/oauth/access_token'

    const clientId = this.configService.get<string>('github.clientId')
    const clientSecret = this.configService.get<string>('github.clientSecret')

    try {
      const res = await fetch(
        `${baseUrl}?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
        },
      )

      const data = await res.json()

      return data
    } catch (err) {
      console.log(err)
      throw new Error('Failed to login user')
    }
  }
}
