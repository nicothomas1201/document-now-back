import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom } from 'rxjs'
import { RepositoryContent } from '../documents/dto'

@Injectable()
export class GithubService {
  private username = 'nicothomas1201'
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  // Por ahora es neceario pero esto se hara en el frontend
  async loginUser(code: string) {
    if (code === '') throw new Error('Code is required')

    const clientId = this.configService.get<string>('github.clientId')
    const clientSecret = this.configService.get<string>('github.clientSecret')

    const res = await fetch(
      `'https://github.com/login/oauth/access_token'?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
      },
    )

    const data = await res.json()

    return data
  }

  async getRepositories(token: string) {
    const { data } = await firstValueFrom(
      this.httpService.get('/user/repos', {
        headers: {
          Accept: 'application/json',
          Authorization: `${token}`,
        },
      }),
    )

    return data
  }

  // https://api.github.com/repos/nicothomas1201/api-laravel
  async getRepoContent(token: string, repoUrl: string, path: string = '') {
    const { data } = await firstValueFrom(
      this.httpService.get(`${repoUrl}/contents/${path}`, {
        headers: {
          Accept: 'application',
          Authorization: `${token}`,
        },
      }),
    )

    return data
  }

  async getRepoInfo(
    token: string,
    repoName: string,
  ): Promise<RepositoryContent> {
    const { data }: { data: RepositoryContent } = await firstValueFrom(
      this.httpService.get(`/repos/${this.username}/${repoName}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    )

    return data
  }

  async downloadProject(token: string, repoName: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`/repos/${this.username}/${repoName}/zipball/main`, {
        responseType: 'arraybuffer',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${token}`,
        },
      }),
    )

    return data
  }

  // private async getUserInfo(token: string) {
  //   const url = `${this.baseUrl}/user`

  //   try {
  //     const res = await fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `${token}`,
  //       },
  //     })

  //     const data = await res.json()

  //     return data
  //   } catch (err) {
  //     console.log(err)
  //     throw new HttpException(
  //       'Failed to get user repos',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     )
  //   }
  // }
}
