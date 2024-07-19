import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'
import { RepositoryContent } from '../documents/dto'

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) {}

  async getRepositories(token: string) {
    const { data } = await firstValueFrom(
      this.httpService.get('/user/repos', {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    )

    return data
  }

  async getRepoInfo(
    token: string,
    repoName: string,
    username: string,
  ): Promise<RepositoryContent> {
    const { data }: { data: RepositoryContent } = await firstValueFrom(
      this.httpService.get(`/repos/${username}/${repoName}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    )

    return data
  }
  async getPublicRepoInfo(
    repoName: string,
    username: string,
  ): Promise<RepositoryContent> {
    const { data }: { data: RepositoryContent } = await firstValueFrom(
      this.httpService.get(`/repos/${username}/${repoName}`, {
        headers: {
          Accept: 'application/json',
        },
      }),
    )

    return data
  }

  async downloadProject(token: string, repoName: string, username: string) {
    const headers = {
      Accept: 'application/vnd.github+json',
    }

    if (typeof token === 'string' && token !== '') {
      headers['Authorization'] = `Bearer ${token}`
    }

    const { data } = await firstValueFrom(
      this.httpService.get(`/repos/${username}/${repoName}/zipball/main`, {
        responseType: 'arraybuffer',
        headers,
      }),
    )

    return data
  }

  async getUser(token: string) {
    const { data } = await firstValueFrom(
      this.httpService.get('/user', {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    )

    return data
  }
}
