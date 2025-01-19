import type { prompt } from '@/types/prompt.model'
import ollama from 'ollama'

export function useOllama() {
  // Regular chat
  const chat = async (prompt: prompt): Promise<string | null> => {
    try {
      const body = {
        messages: prompt.messages,
        model: prompt.model,
        stream: false as const,
      }
      const response = await ollama.chat(body) // Ensure stream is not passed here
      return response.message?.content || null // Safely access content
    }
    catch (error) {
      consola.error('Error in Ollama chat:', error)
      return null
    }
    finally {
      consola.info('Ollama chat completed')
    }
  }

  // Streaming chat
  const chatWithStream = async function* (prompt: prompt): AsyncGenerator<string, void, unknown> {
    try {
      const body = {
        messages: prompt.messages,
        model: prompt.model,
        stream: true as const,
      }

      const response = await ollama.chat(body) // Expect response to be an AsyncIterable
      for await (const part of response) {
        yield part.message?.content || '' // Yield each part's content safely
      }
    }
    catch (error) {
      console.error('Error in Ollama chat streaming:', error)
    }
    finally {
      consola.info('Ollama streaming chat completed')
    }
  }

  return { chat, chatWithStream }
}
