import { IsString, IsNotEmpty } from 'class-validator'

export class LoginDataDto {
  @IsString()
  @IsNotEmpty()
  code: string
}
