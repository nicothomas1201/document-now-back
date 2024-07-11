import { IsString, IsNotEmpty } from 'class-validator'

export class GenerateDocumentDto {
  @IsString()
  @IsNotEmpty()
  code: string

  @IsString()
  @IsNotEmpty()
  lang: string
}
