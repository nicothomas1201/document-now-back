import { Injectable } from '@nestjs/common'
import { createMistral } from '@ai-sdk/mistral'
import { generateText } from 'ai'
import { templateCode } from '../../utils'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class DocumentsService {
  constructor(private readonly configService: ConfigService) {}

  async generateDocument(code: string, lang: string): Promise<string> {
    if (code === '' || lang === '')
      throw new Error('Code and language are required')

    return await this.useAi(templateCode, lang)
  }

  private async useAi(code: string, lang: string): Promise<string> {
    const prompt = `
      El siguiente es un fragmento de código escrito en ${lang}. Necesito una documentación profesional y detallada para este código. Por favor, incluye una descripción general, explicaciones para cada función y método, parámetros de entrada, valores de retorno, y ejemplos de uso si es posible.
      Código: ${code}
      Por favor, proporciona la documentación de la manera más clara y detallada posible. Gracias.
    `

    const model = createMistral({
      apiKey: this.configService.get('mistralKey'),
    })
    console.log('se va a llamar generateText')
    const { text } = await generateText({
      model: model('mistral-large-latest'),
      prompt,
    })
    console.log('se llamó generateText')
    console.log(text)

    return text
  }
}
