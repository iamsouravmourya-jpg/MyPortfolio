import { GoogleGenAI } from '@google/genai'
import { NextRequest, NextResponse } from 'next/server'

const SOURAV_KNOWLEDGE = `
You are the Systems Intel AI Assistant for Sourav's Principal Product Architect & Systems Engineering Portfolio.
Respond professionally, concisely, and helpfully. You can respond in English, Hindi, or Hinglish depending on what language the user asks in.

ABOUT SOURAV:
- Role: Principal Systems Architect, Product Engineer, and Technical Mentor based in Delhi, India.
- Email: iamsouravamaurya@gmail.com
- GitHub: https://github.com/iamsouravmourya-jpg
- Focus: High-performance browser computing, WebGL2/GLSL graphics, WebAssembly sandboxed runtimes, zero-architectural-burn distributed systems, and low-latency LLM orchestration.
- Open to: High-impact platform engineering, technical advisory, distributed systems architecture, and co-founding initiatives.

SYSTEM 01: LernexAI (https://lernexai.vercel.app/ | https://github.com/iamsouravmourya-jpg/LernexAI)
- Category: Autonomous Technical Learning & Sandboxed Execution Engine
- Core Features:
  1. In-browser WebAssembly-isolated code execution sandboxes for C, Python, Java, JavaScript, and SQL with deterministic memory fencing.
  2. Context-aware AI tutoring with sub-200ms TTFT multi-model failover across Groq LPU and Gemini endpoints.
  3. Proctored exam runtime with anti-cheat detection and browser event telemetry.
  4. Cryptographic Ed25519-signed QR verifiable credentials backed by Supabase PostgreSQL.
  5. Multi-tenant Row-Level Security (RLS) policies protecting learner progress and data privacy.
  6. Razorpay payment integration with automated webhook signature verification.
- Tech Stack: React 19, TypeScript, WebAssembly, Supabase PostgreSQL with RLS, Groq LPUs, Gemini, Edge compute.

SYSTEM 02: Corex Quantum Studio (https://corex-vert.vercel.app/ | https://github.com/iamsouravmourya-jpg/Corex)
- Category: Browser-Native GPU Creative Workstation
- Core Features:
  1. Natural-language intent AST compiler turning design prompts into non-destructive vector scene graph operations.
  2. Hardware-accelerated 60 FPS WebGL2 & GLSL fragment shader rendering engine for vector bezier geometry without rasterization overhead.
  3. Origin Private File System (OPFS) .cxbin binary vault for zero-copy, microsecond disk persistence.
  4. 64-step immutable ring buffer and transaction ledger for instant zero-allocation undo/redo time-travel.
  5. Hierarchical spatial index (BVH tree) for high-performance multi-layer transformations, snapping, and alignment.
  6. Color-calibrated multi-format export pipeline to SVG, PDF, WebP, PNG-4K, and raw .cxbin.
- Tech Stack: React 19, TypeScript, WebGL2 / GLSL, OPFS Storage, Zustand state ledger, SIMD.

ASCII ARCHITECTURE SLIDES:
Both systems feature multi-slide interactive ASCII architecture diagrams in the "The thinking behind the screen" section, allowing users to slide through end-to-end topology, sandboxing kernels, multi-model failover routing, and binary persistence engines.

Keep responses sharp, authoritative, and friendly. Do not use overly verbose filler.
`

function getLocalFallback(query: string): string {
  const q = query.toLowerCase()

  if (/hi|hello|hey|namaste|kese|kaise|sup|greetings/.test(q)) {
    return 'Greetings! I am Sourav\'s Systems Intel Assistant. I can walk you through his production systems (LernexAI & Corex), architectural diagrams, low-level browser compute stack, or help you connect with him directly. What would you like to explore?'
  }

  if (/corex|gpu|shader|webgl|studio|canvas|creative/.test(q)) {
    return 'Corex Quantum Studio is a browser-native creative workstation engineered by Sourav. Key architecture:\n• WebGL2 & GLSL fragment shaders for locked 60 FPS vector rendering\n• Natural-language intent AST compiler generating editable bezier hierarchies\n• Origin Private File System (OPFS) .cxbin binary vault for zero-copy disk persistence\n• 64-frame immutable transaction ring buffer for instantaneous time-travel undo/redo.\n\nCheck the interactive ASCII slides in "The thinking behind the screen" to see the GPU pipeline in action!'
  }

  if (/lernex|learn|wasm|sandbox|tutor|exam|student|supabase/.test(q)) {
    return 'LernexAI is a distributed technical learning ecosystem designed and built by Sourav. Key architecture:\n• Browser-isolated WebAssembly compilers for C, Python, Java, JS, and SQL with deterministic memory limits\n• Sub-200ms TTFT multi-model LLM failover routing across Groq LPUs and Gemini\n• Proctored assessment engine with tamper-evident telemetry\n• Ed25519 cryptographic QR verifiable certificates backed by Supabase PostgreSQL RLS.\n\nUse the slide controls under Project 01 to inspect all 6 architectural pillars!'
  }

  if (/slide|ascii|diagram|architect|system map|topology/.test(q)) {
    return 'In the "The thinking behind the screen" section, you can now slide left and right across multiple dedicated ASCII system maps for both LernexAI and Corex! This includes the High-Concurrency Gateway, WASM Runtime Kernel, Sub-200ms LLM Failover Router, Cryptographic Attestation Pipeline, WebGL2 Render Loop, and OPFS Binary Storage.'
  }

  if (/contact|email|hire|available|reach|collaborat|phone|delhi|call/.test(q)) {
    return 'You can contact Sourav directly at iamsouravamaurya@gmail.com. He is based in Delhi, India, and is open for technical advisory, principal systems architecture, and high-impact engineering collaboration. You can also inspect his GitHub at github.com/iamsouravmourya-jpg.'
  }

  if (/who|sourav|background|experience|about|mentor/.test(q)) {
    return 'Sourav is a Principal Systems Architect and technical mentor based in Delhi, India. He specializes in low-level browser compute (WebGL2, WebAssembly, OPFS), distributed state machines, and resilient LLM pipelines with zero architectural burn. He actively mentors engineers in modern systems architecture.'
  }

  if (/stack|tech|technolog|language|library|react/.test(q)) {
    return 'Sourav\'s core production stack:\n• Systems & Runtimes: TypeScript, React 19, Next.js, WebAssembly (WASM), WebGL2/GLSL\n• State & Storage: Origin Private File System (OPFS), Zustand Immutable Ledgers, Supabase PostgreSQL with RLS\n• Compute & AI: Groq LPUs, Google Gemini 2.5 Flash, Edge Functions, Node.js\n• Principles: Zero-burn compute, deterministic memory limits, local-first latency.'
  }

  return 'I can detail Sourav\'s production architectures (Corex and LernexAI), his WebGL2 & WASM pipelines, interactive ASCII system maps, or facilitate a direct collaboration inquiry. Feel free to ask about any specific feature or use the suggestion chips below!'
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()
    const query = (message || '').trim()

    if (!query) {
      return NextResponse.json({ reply: 'Please enter a message to begin.' })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey })
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: query,
          config: {
            systemInstruction: SOURAV_KNOWLEDGE,
            temperature: 0.6,
          },
        })

        if (response?.text) {
          return NextResponse.json({ reply: response.text })
        }
      } catch (geminiError) {
        console.warn('Gemini API call failed, falling back to local engine:', geminiError)
      }
    }

    // High-precision local fallback
    const fallbackReply = getLocalFallback(query)
    return NextResponse.json({ reply: fallbackReply })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { reply: 'System Intel kernel encountered an error. Please ask again or reach Sourav at iamsouravamaurya@gmail.com.' },
      { status: 200 }
    )
  }
}
