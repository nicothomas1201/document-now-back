import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import {
  PrismaClientKnownRequestError as KnownReqError,
  PrismaClientUnknownRequestError as UnknownReqError,
} from '@prisma/client/runtime/library'
import { Request, Response } from 'express'

@Catch(KnownReqError)
export class PrismaKnownExceptionFilter implements ExceptionFilter {
  catch(exception: KnownReqError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()

    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const message = exception

    return response.status(500).json({
      statusCode: 500,
      message,
      path: request.url,
    })
  }
}

@Catch(UnknownReqError)
export class PrismaUnknownExceptionFilter implements ExceptionFilter {
  catch(exception: UnknownReqError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()

    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const message = exception

    return response.status(500).json({
      statusCode: 500,
      message,
      path: request.url,
    })
  }
}
