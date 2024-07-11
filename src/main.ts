import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { ValidationPipe, VersioningType } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // prefix for all routes /api
  app.setGlobalPrefix('api')

  // enable versioning for all routes we use api/v1
  app.enableVersioning({
    type: VersioningType.URI,
  })

  // validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  )

  // cors
  app.enableCors()

  await app.listen(3000)
}
bootstrap()
