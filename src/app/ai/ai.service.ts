import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { createMistral } from '@ai-sdk/mistral'
import { generateText } from 'ai'
import { InjectQueue } from '@nestjs/bullmq'
import { Queue } from 'bullmq'
import { Queue as EQueue } from './dto'
import { DocumentsService } from '../documents'
import { ModuleRef } from '@nestjs/core'

@Injectable()
export class AiService implements OnModuleInit {
  private service: DocumentsService

  constructor(
    @InjectQueue(EQueue.aiQueueName)
    private aiQueue: Queue,
    private readonly configService: ConfigService,
    private moduleRef: ModuleRef,
  ) {}

  onModuleInit() {
    this.service = this.moduleRef.get(DocumentsService, { strict: false })
  }

  async addPromptToQueue(
    prompt: string,
    username: string,
    repoName: string,
    title: string,
  ) {
    if (
      prompt.length === 0 ||
      username === '' ||
      repoName === '' ||
      title === ''
    ) {
      return new BadRequestException('Missing data')
    }

    await this.aiQueue.add('generate-doc', {
      prompt,
      title,
      username,
      repoName,
    })
  }

  async generateAiText(prompt: string) {
    const model = createMistral({
      apiKey: this.configService.get('mistralKey'),
    })

    const { text } = await generateText({
      model: model('mistral-large-latest'),
      prompt,
    })

    return text
  }

  async generateUserDoc(
    prompt: string,
    username: string,
    repoName: string,
    title: string,
  ) {
    const documentation = await this.generateAiText(prompt)

    const data = await this.service.createUserDocument(
      title,
      documentation,
      username,
      repoName,
    )

    return data
  }
}
