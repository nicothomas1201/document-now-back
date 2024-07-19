import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { GithubStrategy, JwtStrategy } from './auth.strategy'
import { JwtModule } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { UserModule } from '../user/user.module'
import { UserService } from '../user/user.service'

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      imports: [UserModule],
      useFactory: async (configService: ConfigService) => {
        return {
          signOptions: { expiresIn: '24h' },
          secret: configService.get('JWT_SECRET'),
        }
      },
      inject: [ConfigService, UserService],
    }),
  ],
  controllers: [AuthController],
  providers: [GithubStrategy, JwtStrategy, UserService],
})
export class AuthModule {}
