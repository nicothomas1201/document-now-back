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

    // const getReposFiltered = () => {
    //   return new Promise((resolve, reject) => {
    //     const reposFiltered = []

    //     data.forEach(async (repo: any, index) => {
    //       const isReact = await this.isReactProject(
    //         token,
    //         repo.owner.login,
    //         repo.name,
    //       )

    //       if (Boolean(isReact)) {
    //         reposFiltered.push(repo)
    //       }

    //       if (index === data.length - 1) resolve(reposFiltered)
    //     })
    //   })
    // }

    // const reactRepos = await getReposFiltered()

    return {
      repositories: data,
      nextPage: page + 1,
      lastPage: lastPageWithContent || lastPageWithoutContent,
    }
  }

  async isReactProject(
    token: string,
    owner: string,
    reponame: string,
  ): Promise<boolean> {
    try {
      const { content } = await this.getRepoContent(
        token,
        owner,
        reponame,
        'package.json',
      )

      const packageJson = JSON.parse(Buffer.from(content, 'base64').toString())

      return packageJson.dependencies?.react !== undefined
    } catch (error) {
      return false
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

    const defaultBranch = await this.getDefaultBrach(username, repoName, token)

    const { data } = await firstValueFrom(
      this.httpService.get(
        `/repos/${username}/${repoName}/zipball/${defaultBranch}`,
        {
          responseType: 'arraybuffer',
          headers,
        },
      ),
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

  async getDefaultBrach(username: string, repoName: string, token: string) {
    const repoInfo = await firstValueFrom(
      this.httpService.get(`/repos/${username}/${repoName}`, {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }),
    )

    return repoInfo.data.default_branch
  }
}
