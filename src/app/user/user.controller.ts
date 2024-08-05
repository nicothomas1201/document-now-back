import { Controller, Get, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { JwtGuard } from '@/guards'
import { User } from '@/decorators'

@Controller({
  path: '/user',
  version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtGuard)
  async getUser(@User('username') username: string) {
    return await this.userService.getUserByUsername(username)
  }
}
