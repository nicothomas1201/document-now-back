import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator'
import { Type } from 'class-transformer'

export class Links {
  @IsNotEmpty()
  @IsString()
  self: string

  @IsNotEmpty()
  @IsString()
  git: string

  @IsNotEmpty()
  @IsString()
  html: string
}

export class RepositoryContent {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  path: string

  @IsNotEmpty()
  @IsString()
  sha: string

  @IsNotEmpty()
  @IsNumber()
  size: number

  @IsNotEmpty()
  @IsString()
  url: string

  @IsNotEmpty()
  @IsString()
  html_url: string

  @IsNotEmpty()
  @IsString()
  git_url: string

  @IsString()
  download_url?: string

  @IsString()
  @IsNotEmpty()
  type: string

  @IsNotEmptyObject()
  _links: Links
}

export class FilesDto {
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => RepositoryContent)
  files: RepositoryContent[]
}

export interface File {
  path: string
  content: string
  name: string
  type: string
}
