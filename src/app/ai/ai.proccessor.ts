import { Processor, WorkerHost } from '@nestjs/bullmq'
import { Job } from 'bullmq'
import { Queue } from './dto'
import { AiService } from './ai.service'

@Processor(Queue.aiQueueName)
export class AiProcessor extends WorkerHost {
  constructor(private readonly aiService: AiService) {
    super()
  }

  async process(job: Job<any, any, string>): Promise<void> {
    switch (job.name) {
      case Queue.generateProccessName:
        const { username, repoName, title, prompt } = job.data

        const userDoc = await this.aiService.generateUserDoc(
          prompt,
          username,
          repoName,
          title,
        )

        console.log(userDoc)

      // TODO: Usar web sockets para enviar el documento al cliente
    }
  }
}
