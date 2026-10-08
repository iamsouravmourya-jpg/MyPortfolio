'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Bot, Send, X } from 'lucide-react'

type Message = {
  id: number
  role: 'assistant' | 'user'
  text: string
}

const suggestions = [
  'What has Sourav built?',
  'Tell me about Corex',
  'How can I contact Sourav?',
]

function getReply(question: string) {
  const query = question.toLowerCase()

  if (/corex|creative|studio|design tool/.test(query)) {
    return 'Corex is Sourav\'s browser-native creative studio. It turns a design brief into editable canvas layers with a local studio bot, WebGL2 tools, an OPFS project vault and multi-format export.'
  }

  if (/lernex|learn|education|tutor|student/.test(query)) {
    return 'LernexAI is a learning platform built around interactive courses, in-browser coding sandboxes, a context-aware AI tutor, proctored assessments and QR-verifiable certificates.'
  }

  if (/architect|system|technolog|stack|built with/.test(query)) {
    return 'Sourav works across product thinking and engineering. LernexAI uses React, TypeScript, Supabase and Groq; Corex combines React, TypeScript, WebGL2, OPFS and Zustand. Scroll to “The thinking behind the screen” for the architecture maps.'
  }

  if (/contact|email|hire|available|reach/.test(query)) {
    return 'You can reach Sourav at iamsouravamaurya@gmail.com. He is based in Delhi, India. Use the “Start a conversation” button in the contact section to write to him.'
  }

  if (/about|sourav|background|who/.test(query)) {
    return 'Sourav is a product-minded engineer and technical mentor based in Delhi, India. He enjoys taking ideas from an early sketch to a useful product, with care for both the experience and the engineering underneath.'
  }

  return 'I can help with Sourav\'s background, LernexAI, Corex, their architecture, or how to get in touch. Pick a prompt below or ask me another way.'
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
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: 'assistant',
      text: "Hey, I'm My Portfolio AI. Ask me about Sourav, his projects, or how to get in touch.",
    },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [isOpen, messages])

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  function sendMessage(text = draft) {
    const question = text.trim()
    if (!question) return

    const nextId = messages.length
    setMessages((current) => [
      ...current,
      { id: nextId, role: 'user', text: question },
      { id: nextId + 1, role: 'assistant', text: getReply(question) },
    ])
    setDraft('')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    sendMessage()
  }

  return (
    <div className="portfolio-chatbot">
      {isOpen && (
        <section className="chatbot-panel" aria-label="My Portfolio AI chat">
          <header className="chatbot-header">
            <BotFace small />
            <div className="chatbot-heading">
              <h2>My Portfolio AI</h2>
              <p><span /> Here to help you explore</p>
            </div>
            <button className="chatbot-close" type="button" aria-label="Close chat" onClick={() => setIsOpen(false)}><X size={17} /></button>
          </header>

          <div className="chatbot-messages" role="log" aria-live="polite" aria-relevant="additions text">
            <div className="chatbot-day-label">A LITTLE TOUR OF SOURAV&apos;S WORK</div>
            {messages.map((message) => (
              <div className={`chat-message ${message.role}`} key={message.id}>
                {message.role === 'assistant' && <BotFace small />}
                <p>{message.text}</p>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="chatbot-suggestions">
                {suggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => sendMessage(suggestion)}>{suggestion}<ArrowUpRight size={13} /></button>)}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form className="chatbot-composer" onSubmit={handleSubmit}>
            <input ref={inputRef} value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Ask about a project…" aria-label="Message My Portfolio AI" />
            <button type="submit" aria-label="Send message" disabled={!draft.trim()}><Send size={16} /></button>
          </form>
          <p className="chatbot-footnote"><Bot size={12} /> Portfolio guide · Replies are based on this page</p>
        </section>
      )}

      <button className={`chatbot-launcher${isOpen ? ' is-open' : ''}`} type="button" aria-expanded={isOpen} aria-label={isOpen ? 'Close My Portfolio AI' : 'Open My Portfolio AI'} onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? <X size={19} /> : <BotFace />}
        <span>{isOpen ? 'Close chat' : 'Chat with me'}</span>
        {!isOpen && <i className="chatbot-launcher-ping" />}
      </button>
    </div>
  )
}
