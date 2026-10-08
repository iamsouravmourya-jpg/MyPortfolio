'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Bot, RotateCcw, Send, X } from 'lucide-react'

type Message = {
  id: number
  role: 'assistant' | 'user'
  text: string
}

const quickChips = [
  'Explain Corex GPU Pipeline',
  'How does LernexAI handle WASM?',
  'Sub-200ms LLM failover',
  'ASCII Architecture Maps',
  'How to contact Sourav?',
]

function getLocalReply(question: string): string {
  const query = question.toLowerCase()

  if (/hi|hello|hey|namaste|kese|kaise|sup|greetings/.test(query)) {
    return 'Greetings! I am Sourav\'s Systems Intel Assistant. Ask me about his production architectures (LernexAI & Corex), WebGL2/WASM runtimes, or engineering collaboration inquiries.'
  }

  if (/corex|creative|studio|design tool|gpu|shader|webgl|canvas/.test(query)) {
    return 'Corex Quantum Studio is Sourav\'s browser-native creative workstation. Key architecture:\n• WebGL2 & GLSL fragment shaders for locked 60 FPS vector rendering\n• Natural-language intent AST compiler generating editable bezier hierarchies\n• Origin Private File System (OPFS) .cxbin binary vault for zero-copy disk persistence\n• 64-frame immutable transaction ring buffer for instantaneous time-travel undo/redo.\n\nSlide through the ASCII diagrams in the architecture console to see the GPU pipeline!'
  }

  if (/lernex|learn|education|tutor|student|wasm|sandbox|exam|credential/.test(query)) {
    return 'LernexAI is a distributed technical learning ecosystem designed and built by Sourav. Key architecture:\n• Browser-isolated WebAssembly compilers for C, Python, Java, JS, and SQL with deterministic memory limits\n• Sub-200ms TTFT multi-model LLM failover routing across Groq LPUs and Gemini\n• Proctored assessment engine with tamper-evident telemetry\n• Ed25519 cryptographic QR verifiable certificates backed by Supabase PostgreSQL RLS.'
  }

  if (/architect|system|technolog|stack|built with|engine|code|diagram|ascii|slide/.test(query)) {
    return 'Sourav\'s core stack centers on zero-burn, browser-native performance: React 19, TypeScript, WebGL2/GLSL, WebAssembly, OPFS binary storage, Zustand state ledgers, Supabase PostgreSQL RLS, and edge LLM orchestration. You can slide left and right across multiple dedicated ASCII system maps in "The thinking behind the screen" section!'
  }

  if (/contact|email|hire|available|reach|collaborat|phone|delhi/.test(query)) {
    return 'Sourav is open for high-impact systems architecture, technical advisory, and platform engineering. Reach him directly at iamsouravamaurya@gmail.com or via GitHub (@iamsouravmourya-jpg). He is based in Delhi, India.'
  }

  if (/about|sourav|background|who|mentor|experience/.test(query)) {
    return 'Sourav is a Principal Systems Architect and engineering mentor based in Delhi, India. He builds high-throughput, browser-native computing engines and mentors engineering cohorts in modern distributed systems, WebAssembly, and low-latency frontend architecture.'
  }

  return 'I can detail Sourav\'s architectural philosophies, Corex WebGL2 pipelines, LernexAI WASM sandboxes, or facilitate a direct collaboration inquiry. Try asking about any feature or click one of the quick chips below!'
}

function BotFace({ small = false }: { small?: boolean }) {
  return (
    <span className={`portfolio-bot-face${small ? ' small' : ''}`} aria-hidden="true">
      <span className="bot-antenna" />
      <span className="bot-eyes"><i /><i /></span>
      <span className="bot-smile" />
    </span>
  )
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: 'assistant',
      text: "Greetings. I am Sourav's Systems Intel Assistant. Ask me about his production architectures, Corex, LernexAI, or engineering collaboration.",
    },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [isOpen, messages, isTyping])

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  async function sendMessage(text = draft) {
    const question = text.trim()
    if (!question || isTyping) return

    const userMessageId = Date.now()
    setMessages((current) => [
      ...current,
      { id: userMessageId, role: 'user', text: question },
    ])
    setDraft('')
    setIsTyping(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question }),
      })

      if (res.ok) {
        const data = await res.json()
        if (data?.reply) {
          setMessages((current) => [
            ...current,
            { id: userMessageId + 1, role: 'assistant', text: data.reply },
          ])
          setIsTyping(false)
          return
        }
      }
    } catch {
      // Handled by local fallback
    }

    // Instant high-precision local fallback
    const localReply = getLocalReply(question)
    setMessages((current) => [
      ...current,
      { id: userMessageId + 1, role: 'assistant', text: localReply },
    ])
    setIsTyping(false)
  }

  function handleReset() {
    setMessages([
      {
        id: 0,
        role: 'assistant',
        text: "Conversation reset. How can I help you explore Sourav's systems architecture?",
      },
    ])
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    sendMessage()
  }

  return (
    <div className="portfolio-chatbot">
      {isOpen && (
        <section className="chatbot-panel" aria-label="Systems Intel Assistant">
          <header className="chatbot-header">
            <BotFace small />
            <div className="chatbot-heading">
              <h2>Systems Intel Assistant</h2>
              <p><span /> Kernel v2.4 · Online</p>
            </div>
            <button className="chatbot-close" type="button" aria-label="Reset conversation" title="Reset conversation" onClick={handleReset} style={{ marginLeft: 'auto', marginRight: '6px' }}>
              <RotateCcw size={15} />
            </button>
            <button className="chatbot-close" type="button" aria-label="Close chat" onClick={() => setIsOpen(false)}>
              <X size={17} />
            </button>
          </header>

          <div className="chatbot-messages" role="log" aria-live="polite" aria-relevant="additions text">
            <div className="chatbot-day-label">ARCHITECTURAL KNOWLEDGE BASE</div>
            {messages.map((message) => (
              <div className={`chat-message ${message.role}`} key={message.id}>
                {message.role === 'assistant' && <BotFace small />}
                <p style={{ whiteSpace: 'pre-line' }}>{message.text}</p>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message assistant">
                <BotFace small />
                <div className="typing-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="chat-quick-chips" aria-label="Suggested topics">
            {quickChips.map((chip) => (
              <button
                type="button"
                className="chat-chip"
                key={chip}
                onClick={() => sendMessage(chip)}
              >
                {chip}
              </button>
            ))}
          </div>

          <form className="chatbot-composer" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask about WebGL, WASM, or architecture…"
              aria-label="Message Systems Intel Assistant"
            />
            <button type="submit" aria-label="Send message" disabled={!draft.trim() || isTyping}>
              <Send size={16} />
            </button>
          </form>
          <p className="chatbot-footnote"><Bot size={12} /> Systems Intel · Powered by Gemini & deterministic kernel</p>
        </section>
      )}

      <button className={`chatbot-launcher${isOpen ? ' is-open' : ''}`} type="button" aria-expanded={isOpen} aria-label={isOpen ? 'Close Systems Intel' : 'Open Systems Intel'} onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? <X size={19} /> : <BotFace />}
        <span>{isOpen ? 'Close Intel' : 'Systems Intel'}</span>
        {!isOpen && <i className="chatbot-launcher-ping" />}
      </button>
    </div>
  )
}

