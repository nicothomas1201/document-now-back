import { Processor, WorkerHost } from '@nestjs/bullmq'
import { Job } from 'bullmq'
import { Queue } from './dto'
import { AiService } from './ai.service'
import { EventsService } from '../gateway/events.service'

@Processor(Queue.aiQueueName)
export class AiProcessor extends WorkerHost {
  constructor(
    private readonly aiService: AiService,
    private readonly socketGateway: EventsService,
  ) {
    super()
  }

  async process(job: Job<any, any, string>): Promise<void> {
    switch (job.name) {
      case Queue.generateProccessName:
        const { username, repoName, title, prompts } = job.data

        setTimeout(async () => {
          // Use the AI service to generate the document
          const { id } = await this.aiService.generateUserDoc(
            prompts,
            username,
            repoName,
            title,
          )

          if (true) {
            console.log('Document generated', id)
            await this.socketGateway.emitData('generated-document', {
              title,
              repoName,
              username,
              id,
              loading: false,
            })
          }
        }, 20000)
    }
  }
}
