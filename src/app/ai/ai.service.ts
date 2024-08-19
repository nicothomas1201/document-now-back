import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { createMistral } from '@ai-sdk/mistral'
import { generateText, streamText } from 'ai'
import { InjectQueue } from '@nestjs/bullmq'
import { Queue } from 'bullmq'
import { Queue as EQueue } from './dto'
import { DocumentsService } from '../documents'
import { ModuleRef } from '@nestjs/core'
import { createWriteStream } from 'node:fs'
import path from 'node:path'

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
    prompts: string[],
    username: string,
    repoName: string,
    title: string,
  ) {
    if (
      prompts.length === 0 ||
      username === '' ||
      repoName === '' ||
      title === ''
    ) {
      return new BadRequestException('Missing data')
    }

    await this.aiQueue.add('generate-doc', {
      prompts,
      title,
      username,
      repoName,
    })
  }

  async generateAiText(prompt: string) {
    console.log('here')
    const model = createMistral({
      apiKey: this.configService.get('mistralKey'),
    })

    const { textStream } = await streamText({
      model: model('mistral-large-latest'),
      prompt,
    })

    let text = ''

    for await (const textPart of textStream) {
      text += textPart
      process.stdout.write(textPart)
    }

    return text
  }

  async generateUserDoc(
    prompts: string[],
    username: string,
    repoName: string,
    title: string,
  ) {
    console.log(repoName)
    let documentation = ''

    for (let prompt of prompts) {
      const textGenerated = await this.generateAiText(prompt)
      documentation = `${documentation} \n ${textGenerated}`
    }

    const data = await this.service.createUserDocument(
      title,
      documentation,
      username,
      repoName,
    )

    return data
  }
}
