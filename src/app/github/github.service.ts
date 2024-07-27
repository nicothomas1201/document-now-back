import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'
import { RepositoryContent } from '../documents/dto'

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) {}

  async getRepositories(token: string, page: number = 1, perPage: number = 30) {
    const { data } = await firstValueFrom(
      this.httpService.get(`/user/repos?page=${page}&per_page=${perPage}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    )

    const lastPageWithContent =
      data.length < perPage && data.length > 0 ? page : null

    const lastPageWithoutContent = data.length === 0 ? page - 1 : null

    return {
      repositories: data,
      nextPage: page + 1,
      lastPage: lastPageWithContent || lastPageWithoutContent,
    }
  }

  async getRepoInfo(
    token: string,
    repoName: string,
    username: string,
    info: string = '/',
  ): Promise<RepositoryContent> {
    const { data }: { data: RepositoryContent } = await firstValueFrom(
      this.httpService.get(`/repos/${username}/${repoName}/${info}`, {
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

  async downloadProject(
    token: string,
    repoName: string,
    username: string,
    preview: boolean,
  ) {
    const headers = {
      Accept: 'application/vnd.github+json',
    }

    if (!preview && token) {
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

  async getRepoContent(
    token: string,
    username: string,
    repoName: string,
    path: string = '/',
  ) {
    const { data } = await firstValueFrom(
      this.httpService.get(`/repos/${username}/${repoName}/contents/${path}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    )

    return data
  }
}
