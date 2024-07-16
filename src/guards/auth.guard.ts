import { Injectable } from '@nestjs/common'
// import { Observable } from 'rxjs'
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport'

@Injectable()
export class AuthGuard extends PassportAuthGuard('github-app') {
  // TODO: Buscar la manera de validar el token
  // canActivate(context: ExecutionContext) {
  //   try {
  //     const result = super.canActivate(context)
  //     return result
  //   } catch (error) {
  //     console.error('Error during authentication:', error)
  //     throw error
  //   }
  // }
}
