import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { VersioningType } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // prefix for all routes /api
  app.setGlobalPrefix('api')

  // enable versioning for all routes we use api/v1
  app.enableVersioning({
    type: VersioningType.URI,
  })

  await app.listen(3000)
}
bootstrap()
