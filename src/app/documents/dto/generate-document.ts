import { IsString, IsNotEmpty } from 'class-validator'

export class GenerateDocumentDto {
  @IsString()
  @IsNotEmpty()
  repoName: string
}

export class GeneratePublicDocumentDto extends GenerateDocumentDto {
  @IsString()
  @IsNotEmpty()
  username: string
}
