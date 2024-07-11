import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
// import { ConfigService } from '@nestjs/config'

@Controller({
  version: '1',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // console.log(this.configService.get<string>('API_BASE_URL'))
    return this.appService.getHello()
  }
}
