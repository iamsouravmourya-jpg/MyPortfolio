'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Bot, MessageCircle, RotateCcw, X } from 'lucide-react'

type Message = {
  id: number
  role: 'assistant' | 'user'
  text: string
}

const whatsappUrl = 'https://wa.me/918527796255?text=Hi%20Sourav%2C%20I%20saw%20your%20portfolio.'

const quickOptions = [
  {
    label: 'About Sourav',
    reply: 'Sourav is a systems-minded product architect and engineering mentor based in Delhi, India. He works on browser-native computing, distributed systems, and practical product engineering.',
  },
  {
    label: 'LernexAI',
    reply: 'LernexAI is a technical learning platform with in-browser WebAssembly sandboxes, contextual AI tutoring, proctored assessments, and QR-verifiable certificates.',
  },
  {
    label: 'Corex',
    reply: 'Corex is a browser-native creative studio. It turns a design brief into editable vector work with a local studio bot, WebGL2 tools, and an OPFS project vault.',
  },
  {
    label: 'System architecture',
    reply: 'The architecture section has interactive diagrams for both projects. Choose LernexAI or Corex, then move through the system maps with the arrows, chapter rail, keyboard arrows, or a swipe.',
  },
  {
    label: 'Email Sourav',
    reply: 'Email Sourav at iamsouravamaurya@gmail.com.',
  },
]

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
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: 'assistant',
      text: "Hi, I'm My Portfolio AI. Choose a topic and I'll show you around Sourav's portfolio.",
    },
  ])
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

  function chooseOption(option: (typeof quickOptions)[number]) {
    const messageId = messages.length
    setMessages((current) => [
      ...current,
      { id: messageId, role: 'user', text: option.label },
      { id: messageId + 1, role: 'assistant', text: option.reply },
    ])
  }

  function resetConversation() {
    setMessages([
      {
        id: 0,
        role: 'assistant',
        text: "Hi, I'm My Portfolio AI. Choose a topic and I'll show you around Sourav's portfolio.",
      },
    ])
  }

  return (
    <div className="portfolio-chatbot">
      {isOpen && (
        <section className="chatbot-panel" aria-label="My Portfolio AI chat">
          <header className="chatbot-header">
            <BotFace small />
            <div className="chatbot-heading">
              <h2>My Portfolio AI</h2>
              <p><span /> Offline · Choose a topic</p>
            </div>
            <button className="chatbot-close" type="button" aria-label="Reset conversation" title="Reset conversation" onClick={resetConversation} style={{ marginLeft: 'auto', marginRight: '6px' }}>
              <RotateCcw size={15} />
            </button>
            <button className="chatbot-close" type="button" aria-label="Close chat" onClick={() => setIsOpen(false)}>
              <X size={17} />
            </button>
          </header>

          <div className="chatbot-messages" role="log" aria-live="polite" aria-relevant="additions text">
            <div className="chatbot-day-label">A LITTLE TOUR OF SOURAV&apos;S WORK</div>
            {messages.map((message) => (
              <div className={`chat-message ${message.role}`} key={message.id}>
                {message.role === 'assistant' && <BotFace small />}
                <p>{message.text}</p>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="chat-quick-chips" aria-label="Choose a portfolio topic">
            {quickOptions.map((option) => (
              <button type="button" className="chat-chip" key={option.label} onClick={() => chooseOption(option)}>
                {option.label}
              </button>
            ))}
            <a className="chat-chip whatsapp-chat-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={12} /> WhatsApp Sourav <ArrowUpRight size={11} />
            </a>
          </div>
          <p className="chatbot-footnote"><Bot size={12} /> Offline portfolio guide · Answers are built in</p>
        </section>
      )}

      <button className={`chatbot-launcher${isOpen ? ' is-open' : ''}`} type="button" aria-expanded={isOpen} aria-label={isOpen ? 'Close My Portfolio AI' : 'Open My Portfolio AI'} onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? <X size={19} /> : <BotFace />}
        <span>{isOpen ? 'Close My Portfolio AI' : 'My Portfolio AI'}</span>
        {!isOpen && <i className="chatbot-launcher-ping" />}
      </button>
    </div>
  )
}