import { useEffect, useRef, useState } from 'react'
import { Bot, X, Send } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Message {
  id: number
  role: 'bot' | 'user'
  text: string
}

// URL de ton backend — configurable via variable d'env (Vite).
// En prod, définis VITE_API_URL=https://ton-backend.up.railway.app (ou autre) dans .env
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const errorAnswer =
  "Désolé, je n'arrive pas à te répondre pour le moment 🙁 Réessaie dans un instant, ou écris directement à Gracia via la section Contact."

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: 'bot',
      text: "Salut 👋 Je suis l'assistant de Gracia. Pose-moi une question sur son parcours, sa stack ou ses projets.",
    },
  ])
  const scrollRef = useRef<HTMLDivElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, isTyping])

  // Annule la requête en cours si le composant est démonté
  useEffect(() => {
    return () => abortRef.current?.abort()
  }, [])

  const streamBotReply = async (userText: string) => {
    const botMessageId = Date.now() + 1
    // On insère tout de suite un message bot vide, qu'on va remplir au fil du stream
    setMessages(prev => [...prev, { id: botMessageId, role: 'bot', text: '' }])

    const controller = new AbortController()
    abortRef.current = controller

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
        signal: controller.signal,
      })

      if (!res.ok || !res.body) {
        throw new Error(`Réponse serveur invalide (${res.status})`)
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder('utf-8')
      setIsTyping(false) // dès que le stream commence, on affiche le texte plutôt que les "..."

      let fullText = ''
      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        fullText += decoder.decode(value, { stream: true })
        setMessages(prev =>
          prev.map(m => (m.id === botMessageId ? { ...m, text: fullText } : m))
        )
      }

      // Si le backend n'a rien renvoyé du tout
      if (!fullText.trim()) {
        setMessages(prev =>
          prev.map(m =>
            m.id === botMessageId ? { ...m, text: errorAnswer } : m
          )
        )
      }
    } catch (err) {
      if ((err as Error).name === 'AbortError') return
      console.error('Erreur chat:', err)
      setMessages(prev =>
        prev.map(m => (m.id === botMessageId ? { ...m, text: errorAnswer } : m))
      )
    } finally {
      setIsTyping(false)
      abortRef.current = null
    }
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return

    const userMessage: Message = { id: Date.now(), role: 'user', text }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    streamBotReply(text)
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      {isOpen && (
        <div className="mb-4 flex h-[70vh] max-h-[520px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
          {/* En-tête */}
          <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-900 px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Assistant AI de Van'siem
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fermer le chat"
              className="rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-[#f7f6f1] px-4 py-4"
          >
            {messages
              .filter(message => message.text !== '')
              .map(message => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'rounded-br-sm whitespace-pre-wrap bg-zinc-900 text-white'
                        : 'rounded-bl-sm border border-zinc-200 bg-white text-zinc-700 shadow-sm'
                    }`}
                  >
                    {message.role === 'bot' ? (
                      <div
                        className="prose prose-sm prose-zinc max-w-none
                          prose-p:my-1.5 prose-p:leading-relaxed
                          prose-ul:my-1.5 prose-ol:my-1.5 prose-li:my-0.5
                          prose-headings:my-2 prose-headings:font-semibold
                          prose-strong:font-semibold prose-strong:text-zinc-900
                          prose-a:text-zinc-900 prose-a:underline prose-a:underline-offset-2
                          prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:text-xs prose-code:before:content-none prose-code:after:content-none
                          prose-pre:my-1.5 prose-pre:bg-zinc-900
                          first:prose-p:mt-0 last:prose-p:mb-0"
                      >
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {message.text}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      message.text
                    )}
                  </div>
                </div>
              ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-zinc-200 bg-white px-4 py-3 shadow-sm">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400" />
                </div>
              </div>
            )}
          </div>

          {/* Saisie */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-zinc-200 bg-white p-3"
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Pose ta question…"
              className="flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white"
            />
            <button
              type="submit"
              aria-label="Envoyer"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-white transition-colors hover:bg-zinc-800 disabled:opacity-40"
              disabled={!input.trim()}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        aria-label={isOpen ? 'Fermer le chat' : 'Ouvrir le chat'}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white shadow-2xl transition-transform hover:scale-105 active:scale-95"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </button>
    </div>
  )
}

export default ChatbotWidget
