import ollama from 'ollama';
import type {prompt} from '@/types/prompt.model';

export function useOllama() {
    // Regular chat
    const chat = async (prompt: Omit<prompt, 'stream'>): Promise<string | null> => {
        try {
            const body = {messages: prompt.messages, model: prompt.model};
            const response = await ollama.chat(body); // Ensure stream is not passed here
            return response.message?.content || null; // Safely access content
        } catch (error) {
            console.error('Error in Ollama chat:', error);
            return null;
        } finally {
            console.debug('Ollama chat completed');
        }
    };

    // Streaming chat
    const chatWithStream = async function* (prompt: prompt): AsyncGenerator<string, void, unknown> {
        try {
            const body = {messages: prompt.messages, model: prompt.model, stream: true};
            //@ts-expect-error
            // TODO: Fix this type error
            const response = await ollama.chat(body); // Expect response to be an AsyncIterable
            for await (const part of response) {
                yield part.message?.content || ''; // Yield each part's content safely
            }
        } catch (error) {
            console.error('Error in Ollama chat streaming:', error);
        } finally {
            console.debug('Ollama streaming chat completed');
        }
    };

    return {chat, chatWithStream};
}
