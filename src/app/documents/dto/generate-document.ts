import { IsString, IsNotEmpty } from 'class-validator'

export type DocLanguage = 'EN' | 'ES'

export class GenerateDocumentDto {
  @IsString()
  @IsNotEmpty()
  repoName: string

  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsString()
  @IsNotEmpty()
  lang: DocLanguage

  @IsString()
  @IsNotEmpty()
  owner: DocLanguage
}

export class GeneratePublicDocumentDto extends GenerateDocumentDto {
  @IsString()
  @IsNotEmpty()
  username: string
}
