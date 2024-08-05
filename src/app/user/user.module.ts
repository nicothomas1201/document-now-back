import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { PrismaService } from '@/services'
import { UserController } from './user.controller'

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService, PrismaService],
})
export class UserModule {}
