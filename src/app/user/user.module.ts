import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { PrismaService } from '@/services'

@Module({
  controllers: [],
  providers: [UserService, PrismaService],
  exports: [UserService, PrismaService],
})
export class UserModule {}
