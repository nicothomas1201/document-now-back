import { IsString, IsNotEmpty } from 'class-validator'

// export class GenerateDocumentDto {
//   @IsString()
//   @IsNotEmpty()
//   code: string

//   @IsString()
//   @IsNotEmpty()
//   lang: string
// }

export class GenerateDocumentDto {
  @IsString()
  @IsNotEmpty()
  githubToken: string

  @IsString()
  @IsNotEmpty()
  repoName: string
}
