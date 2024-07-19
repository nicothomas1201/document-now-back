import { isValidURL } from '@/utils'
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { redirect } = req.query

    this.configService.set('REDIRECT_URL', redirect)

    if (redirect && isValidURL(String(redirect))) {
      return next()
    }

    if (!redirect || redirect === '') {
      throw new HttpException(
        'Redirect URL is required',
        HttpStatus.BAD_REQUEST,
      )
    }

    if (!isValidURL(String(redirect))) {
      throw new HttpException('Invalid Redirect URL', HttpStatus.BAD_REQUEST)
    }
  }
}
