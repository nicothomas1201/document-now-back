import { forwardRef, Module } from '@nestjs/common'
import { AiService } from './ai.service'
import { BullModule } from '@nestjs/bullmq'
import { AiProcessor } from './ai.proccessor'
import { Queue } from './dto'
import { DocumentsModule } from '../documents'
import { EventsGateway, EventsModule } from '../gateway'
import { EventsService } from '../gateway/events.service'

@Module({
  imports: [
    EventsModule,
    forwardRef(() => DocumentsModule),
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: Queue.aiQueueName,
    }),
  ],
  providers: [AiService, AiProcessor, EventsService, EventsGateway],
  exports: [AiService, BullModule],
})
export class AiModule {}
