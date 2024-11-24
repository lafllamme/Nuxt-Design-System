export interface prompt {
    model: string | Models
    messages: Message[]
    stream?: boolean | undefined
}

export type Roles = 'user' | 'system'

export interface Message {
    role: Roles
    content: string
}

export type Models =
    'mistral'
    | 'llama3.2'
    | 'llama3.2-vision'
    | 'llama3.1'
    | 'phi3'
    | 'gemma2'
    | 'phi3:medium'
    | 'gemma2:2b'
    | 'gemma2:27b'
    | 'moondream'
    | 'neural-chat'
    | 'starling-lm'
    | 'codellama'
    | 'llama2-uncensored'
    | 'llava'
    | 'solar'

