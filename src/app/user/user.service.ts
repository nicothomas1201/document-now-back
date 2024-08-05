import { PrismaService } from '@/services/prisma.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserByUsername(username: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
        username: true,
        email: true,
        github_token: false,
      },
    })

    if (!user) {
      throw new NotFoundException(`User with username: ${username} not found`)
    }

    return user
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({
      data,
    })
  }

  async findUnique(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where,
    })
  }

  async updateUser(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ) {
    return this.prisma.user.update({
      where,
      data,
    })
  }
}
