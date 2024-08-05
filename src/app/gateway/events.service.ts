import { Injectable } from '@nestjs/common'
import { EventsGateway } from './events.gateway'

@Injectable()
export class EventsService {
  constructor(private readonly socketGateway: EventsGateway) {}

  async emitData(name: string, data: unknown) {
    await this.socketGateway.server.emit(name, data)
  }
}
