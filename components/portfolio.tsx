'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Braces,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Database,
  FileCheck2,
  GitBranch,
  GraduationCap,
  Layers,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react'
import PortfolioChatbot from './portfolio-chatbot'

const projects = [
  {
    number: 'System 01',
    id: 'lernex',
    name: 'LernexAI',
    category: 'Autonomous Technical Learning & Execution Engine',
    description:
      'A distributed technical education platform architected with in-browser WebAssembly sandboxes, dynamic multi-provider LLM failover pipelines, proctored runtime verification, and cryptographic credential attestation.',
    role: 'Lead Systems Architect & Full-Stack Engineer',
    focus: ['WASM sandboxed runtimes', 'Resilient LLM routing & failover', 'Supabase RLS & cryptographic attestation'],
    repo: 'https://github.com/iamsouravmourya-jpg/LernexAI',
    live: 'https://lernexai.vercel.app/',
    screenshot: '/lernexai.png',
    screenshotAlt: 'LernexAI homepage featuring its interactive AI tutor',
    screenPrompt: 'WASM RUNTIME · CONTEXTUAL LLM PIPELINE',
    screenCaption: 'Deterministic sandboxing with sub-200ms streaming inference',
    details: [
      {
        title: 'Zero-Latency WASM Sandboxes',
        text: 'Browser-isolated WebAssembly runtime sandboxes for C, Python, Java, JavaScript, and SQL with deterministic memory fencing and instant execution.',
      },
      {
        title: 'Sub-200ms LLM Failover Router',
        text: 'Autonomous multi-model inference pipeline with dynamic latency profiling and seamless failover across Groq LPUs and Gemini Flash models.',
      },
      {
        title: 'Proctored Runtime & Anti-Cheat',
        text: 'Real-time session integrity tracking, fullscreen lockdown enforcement, tab-switch telemetry, and background event recording.',
      },
      {
        title: 'Cryptographic Ed25519 Credentials',
        text: 'Tamper-proof digital certificates signed via Ed25519 cryptography, verified through dual-layer QR code checksums and public portal.',
      },
      {
        title: 'Multi-Tenant Supabase RLS',
        text: 'Strict PostgreSQL Row-Level Security policies protecting tenant boundaries, learner lesson checkpoints, and real-time state synchronization.',
      },
      {
        title: 'Automated Payment & Webhook Bus',
        text: 'End-to-end Razorpay integration with idempotent webhook signature verification, instant tier unlocks, and automated receipt delivery.',
      },
    ],
    technologies: ['React 19', 'TypeScript', 'WebAssembly', 'Supabase RLS', 'Groq LPU', 'Edge Compute'],
    accent: 'lernex',
    mark: 'L',
  },
  {
    number: 'System 02',
    id: 'corex',
    name: 'Corex Quantum Studio',
    category: 'Browser-Native GPU Creative Workstation',
    description:
      'A browser-native creative workstation converting natural-language intent into editable bezier scene graphs, powered by hardware-accelerated WebGL2 pipelines and zero-copy Origin Private File System persistence.',
    role: 'Principal Architect & Graphics Engineer',
    focus: ['WebGL2 fragment shaders', 'Deterministic 60 FPS scene graph', 'OPFS binary storage & ring-buffer ledger'],
    repo: 'https://github.com/iamsouravmourya-jpg/Corex',
    live: 'https://corex-vert.vercel.app/',
    screenshot: '/corex.png',
    screenshotAlt: 'Corex creative studio with its vector tool rail, blank design canvas, and stage controls',
    screenPrompt: 'GPU-ACCELERATED VECTOR STAGE · OPFS VAULT',
    screenCaption: 'Real-time 60 FPS GLSL shader pipelines with binary state ledger',
    details: [
      {
        title: 'Natural-Language Intent AST Compiler',
        text: 'Four-stage deterministic planner parses design prompts into non-destructive vector hierarchies and mathematical geometry operations.',
      },
      {
        title: 'Real-Time 60 FPS WebGL2 Vector Stage',
        text: 'Hardware-accelerated GPU render loop generating dynamic bezier primitives and shaders without rasterization bottlenecks.',
      },
      {
        title: 'Origin Private File System (OPFS) Vault',
        text: 'Direct-to-disk .cxbin binary serialization with microsecond read/write persistence and zero memory leaks.',
      },
      {
        title: '64-Step Immutable Ring Buffer Ledger',
        text: 'Zero-allocation time-travel undo/redo memory ledger recording reversible state mutations across all canvas objects.',
      },
      {
        title: 'Hierarchical Scene Graph & Spatial BVH',
        text: 'Bounding-box spatial hierarchy indexing enabling instantaneous multi-element selection, snapping, and matrix transforms.',
      },
      {
        title: 'Multi-Format Vector Pipeline & Export',
        text: 'Production-grade serialization to clean SVG, PDF vector paths, WebP, 4K PNG, and raw .cxbin with color profiling.',
      },
    ],
    technologies: ['React 19', 'TypeScript', 'WebGL2 / GLSL', 'OPFS Storage', 'Zustand Ledger', 'SIMD'],
    accent: 'corex',
    mark: 'C',
  },
]

function ProjectDetails({ project }: { project: (typeof projects)[number] }) {
  const [slidePage, setSlidePage] = useState(0)
  const pageSize = 3
  const totalPages = Math.ceil(project.details.length / pageSize)
  const displayedDetails = project.details.slice(slidePage * pageSize, (slidePage + 1) * pageSize)

  return (
    <div className="project-details-panel" id={`${project.id}-details`}>
      <div className="details-panel-heading">
        <span className="eyebrow">System Architecture</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="details-count">
            PILLARS {slidePage * pageSize + 1}-{(slidePage + 1) * pageSize} OF 0{project.details.length}
          </span>
          <div className="slider-btn-group">
            <button
              type="button"
              className="slide-nav-btn"
              onClick={() => setSlidePage((p) => Math.max(0, p - 1))}
              disabled={slidePage === 0}
              aria-label="Previous pillars"
              title="Previous pillars"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              className="slide-nav-btn"
              onClick={() => setSlidePage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={slidePage === totalPages - 1}
              aria-label="Next pillars"
              title="Next pillars"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="details-list">
        {displayedDetails.map((detail, index) => {
          const actualIndex = slidePage * pageSize + index + 1
          return (
            <article className="detail-row" key={detail.title}>
              <span className="detail-index">0{actualIndex}</span>
              <div>
                <h4>{detail.title}</h4>
                <p>{detail.text}</p>
              </div>
              <ArrowUpRight size={15} aria-hidden="true" />
            </article>
          )
        })}
      </div>

      <div className="slider-controls">
        <div className="slide-indicator-pills">
          <button
            type="button"
            className={`slide-pill${slidePage === 0 ? ' active' : ''}`}
            onClick={() => setSlidePage(0)}
          >
            Pillars 01 – 03
          </button>
          <button
            type="button"
            className={`slide-pill${slidePage === 1 ? ' active' : ''}`}
            onClick={() => setSlidePage(1)}
          >
            Pillars 04 – 06
          </button>
        </div>
        <div style={{ fontSize: '9px', fontWeight: 700, color: '#686b61' }}>
          Page {slidePage + 1} of {totalPages}
        </div>
      </div>

      <div className="technology-row">
        <span className="eyebrow">Engine Stack</span>
        <div>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        <a className="repo-link" href={project.live} target="_blank" rel="noreferrer">
          Launch live system <ArrowUpRight size={14} />
        </a>
        <a className="repo-link" href={project.repo} target="_blank" rel="noreferrer">
          Inspect source repository <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  )
}

function ProjectChapter({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`project-chapter ${project.accent}`} id={project.id}>
      <div className="chapter-inner">
        <div className="chapter-copy">
          <span className="project-number">
            <span>{project.number}</span>
            <span className="chapter-mark">{project.mark}</span>
          </span>
          <p className="project-category">{project.category}</p>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-role">
            <span className="eyebrow">Architectural Scope</span>
            <p>{project.role}</p>
          </div>
          <ul className="project-focus">
            {project.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="text-link" href={`#${project.id}-details`}>
            Deep-dive system specs <ArrowDown size={15} />
          </a>
        </div>
        <div className="chapter-visual" aria-label={`${project.name} system runtime view`}>
          <div className="visual-chrome">
            <span />
            <span />
            <span />
            <p>{project.name} // ACTIVE RUNTIME</p>
            <Sparkles size={16} />
          </div>
          <div className="featured-slot has-featured-image">
            <Image
              className="featured-image"
              src={project.screenshot}
              alt={project.screenshotAlt}
              fill
              sizes="(max-width: 700px) calc(100vw - 62px), (max-width: 1000px) 80vw, 58vw"
            />
          </div>
        </div>
        <ProjectDetails project={project} />
      </div>
    </article>
  )
}

const architectureViews = {
  lernex: {
    label: 'LernexAI',
    slides: [
      {
        tag: '01 TOPOLOGY',
        label: 'System Topology',
        eyebrow: 'Distributed Learning Infrastructure',
        title: 'High-Concurrency Service Gateway & Core Mesh',
        summary:
          'End-to-end dataflow linking the learner surface to serverless API gateways, dynamic multi-model LLM inference failover, payment event buses, and Supabase PostgreSQL persistence.',
        points: [
          { icon: GraduationCap, title: 'WASM Learner Surface', text: 'In-browser compilation and execution sandboxes for C, Python, Java, JS, and SQL.' },
          { icon: Workflow, title: 'Service Gateway', text: 'Sub-200ms TTFT multi-model LLM failover, webhook validation, and zero-trust session hydration.' },
          { icon: Database, title: 'Persistence & Attestation', text: 'Supabase PostgreSQL RLS policies and Ed25519 cryptographic certificate proofs.' },
        ],
        diagram: `┌────────────────────────────────────────────────────────┐
│             DISTRIBUTED LEARNER INTERFACE              │
│   WASM Code Sandbox  │  Contextual AI Stream  │ Exam   │
└───────────────────────────┬────────────────────────────┘
                            │ Non-blocking WebSocket / REST
                            ▼
┌────────────────────────────────────────────────────────┐
│           HIGH-CONCURRENCY SERVICE GATEWAY             │
│   ├─ Dynamic LLM Router (Sub-200ms TTFT Failover)      │
│   ├─ Cryptographic Signature & Payment Verifier        │
│   └─ Zero-Trust Session & State Hydration              │
└─────────────┬────────────────────────────┬─────────────┘
              │                            │
              ▼                            ▼
  ┌───────────────────────┐    ┌───────────────────────┐
  │   GROQ LPU / GEMINI   │    │  PAYMENT & EVENT BUS  │
  │  Multi-Model Pipeline │    │  Razorpay / Webhooks  │
  └───────────┬───────────┘    └───────────────────────┘
              │
              ▼
┌────────────────────────────────────────────────────────┐
│            PERSISTENCE & SECURITY FABRIC               │
│   ├─ Supabase PostgreSQL with Granular RLS Policies    │
│   ├─ Real-time Snapshot Ledger & Event Log             │
│   └─ Ed25519 Cryptographic Certificate Proofs          │
└────────────────────────────────────────────────────────┘`,
      },
      {
        tag: '02 WASM KERNEL',
        label: 'WASM Sandbox Kernel',
        eyebrow: 'In-Browser Isolated Execution',
        title: 'Deterministic Multi-Language Sandboxing',
        summary:
          'Client-side code execution engine deploying WebAssembly compilers for C, Python (Pyodide), Java, JavaScript (QuickJS), and SQLite with strict 256MB memory fencing.',
        points: [
          { icon: Cpu, title: 'Worker Thread Isolation', text: 'Dedicated Web Worker executes code off the UI thread via ArrayBuffer transfers.' },
          { icon: Lock, title: 'Deterministic Fencing', text: 'Hard 5-second CPU ceiling with memory boundary traps to prevent infinite loops.' },
          { icon: Zap, title: 'Microsecond Stdout Pipe', text: 'Real-time capturing of stdout/stderr and instant assertion evaluation.' },
        ],
        diagram: `┌────────────────────────────────────────────────────────┐
│          MONACO EDITOR & RUNTIME WORKER THREAD         │
│   Source Code (C / Python / Java / JS / SQL)           │
└───────────────────────────┬────────────────────────────┘
                            │ PostMessage (ArrayBuffer Transfer)
                            ▼
┌────────────────────────────────────────────────────────┐
│        IN-BROWSER WEBASSEMBLY EXECUTION ENGINE         │
│   ├─ Clang / Emscripten WASM Runtime Compiler          │
│   ├─ Pyodide (CPython 3.12 WebAssembly Kernel)         │
│   ├─ QuickJS Sandbox & SQLite WASM Driver Engine       │
│   └─ Strict 256MB Linear Memory Isolation Fence        │
└─────────────┬────────────────────────────┬─────────────┘
              │ Standard I/O Pipe          │ Signal Trap
              ▼                            ▼
  ┌───────────────────────┐    ┌───────────────────────┐
  │  STDOUT / STDERR RING │    │ TIMEOUT / SIGKILL BUS │
  │  Microsecond Capture  │    │ 5s Hard CPU Ceiling   │
  └───────────┬───────────┘    └───────────────────────┘
              │
              ▼
┌────────────────────────────────────────────────────────┐
│        LIVE TERMINAL & CODE TELEMETRY DISPLAY          │
│   ANSI Color Serializer · Instant Test Suite Asserts   │
└────────────────────────────────────────────────────────┘`,
      },
      {
        tag: '03 LLM FAILOVER',
        label: 'LLM Failover Router',
        eyebrow: 'Autonomous Multi-Model Routing',
        title: 'Sub-200ms TTFT Multi-Provider Routing',
        summary:
          'Resilient LLM inference dispatcher balancing token throughput and latency. Groq LPUs handle fast token streaming, with automatic circuit-breaker fallback to Gemini 2.5 Flash.',
        points: [
          { icon: Zap, title: 'Primary Groq LPU', text: 'Sub-150ms Time-To-First-Token and 300+ tokens/sec for instantaneous interactive hints.' },
          { icon: RefreshCw, title: 'Circuit-Breaker Fallback', text: 'Seamless transition to Gemini 2.5 Flash on upstream rate limits or complex reasoning tasks.' },
          { icon: Workflow, title: 'SSE Streaming Pipeline', text: 'Non-blocking Server-Sent Events delivering real-time markdown tokens to the client.' },
        ],
        diagram: `┌────────────────────────────────────────────────────────┐
│             STUDENT PROMPT & LESSON CONTEXT            │
│   Code Buffer + Cursor Context + Diagnostic Telemetry  │
└───────────────────────────┬────────────────────────────┘
                            │ Non-blocking Edge Proxy
                            ▼
┌────────────────────────────────────────────────────────┐
│        INTELLIGENT MULTI-PROVIDER ROUTER & MESH        │
│   ├─ Token Count & Complexity Estimator                │
│   ├─ Autonomous Health Probe & Circuit Breaker         │
│   └─ Sub-200ms TTFT Latency Optimizing Dispatcher      │
└─────────────┬────────────────────────────┬─────────────┘
              │ Primary Route (<150ms)     │ Circuit Tripped
              ▼                            ▼
  ┌───────────────────────┐    ┌───────────────────────┐
  │  GROQ LPU CLUSTER     │    │  GEMINI 2.5 FLASH     │
  │  Llama-3-70B / 8B     │───►│  High-Context Fallback│
  │  300+ Tokens/Sec Peak │    │  Multimodal Reasoning │
  └───────────┬───────────┘    └───────────┬───────────┘
              │                            │
              └─────────────┬──────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│           STREAMING SSE RESPONSE DISPATCHER            │
│   Realtime Markdown Stream · Interactive Code Hints    │
└────────────────────────────────────────────────────────┘`,
      },
      {
        tag: '04 CRYPTOGRAPHY',
        label: 'Cryptographic Proof',
        eyebrow: 'Verifiable Attestation Pipeline',
        title: 'Proctored Telemetry & Ed25519 Signatures',
        summary:
          'Proctored assessment engine coupling anti-cheat behavioral telemetry with Ed25519 asymmetric cryptography to issue tamper-proof verifiable certificates.',
        points: [
          { icon: ShieldCheck, title: 'Proctoring Telemetry', text: 'Fullscreen lockdown, tab-switch logging, and anomaly event tracking.' },
          { icon: Lock, title: 'Ed25519 Signing Key', text: 'Cryptographic digital signature generated upon successful exam criteria validation.' },
          { icon: FileCheck2, title: 'Dual-Layer QR Proof', text: 'Offline verifiable QR checksum with public verification lookup portal.' },
        ],
        diagram: `┌────────────────────────────────────────────────────────┐
│         PROCTORED ASSESSMENT EXAMINATION RUNTIME       │
│   Fullscreen Lockdown · Tab Blur Events · Audio Checks │
└───────────────────────────┬────────────────────────────┘
                            │ Audit Payload with Nonce
                            ▼
┌────────────────────────────────────────────────────────┐
│        TAMPER-PROOF EVALUATION ENGINE & SCORER         │
│   ├─ Deterministic Test Suite Execution Validation     │
│   ├─ Anomaly Scoring & Anti-Cheat Heuristics Engine    │
│   └─ Integrity Hash Generator (SHA-256 Checksum)       │
└─────────────┬──────────────────────────────────────────┘
              │ Verified Pass Event
              ▼
┌────────────────────────────────────────────────────────┐
│        ED25519 CRYPTOGRAPHIC CERTIFICATE SIGNER        │
│   Private Key Signing ──► Immutable Certificate Digest │
└─────────────┬──────────────────────────────────────────┘
              │
              ▼
┌────────────────────────────────────────────────────────┐
│       DUAL-LAYER QR CODE & PUBLIC VERIFY PORTAL        │
│   Public Key Check · Supabase Ledger · Verifiable URL  │
└────────────────────────────────────────────────────────┘`,
      },
      {
        tag: '05 SUPABASE RLS',
        label: 'Supabase RLS & Fabric',
        eyebrow: 'Multi-Tenant Persistence Architecture',
        title: 'Granular RLS & Realtime Ledger Fabric',
        summary:
          'Supabase PostgreSQL multi-tenant architecture enforcing strict Row Level Security boundaries, real-time progress syncing, and audit-logged checkpoints.',
        points: [
          { icon: Database, title: 'Strict Row Level Security', text: '`auth.uid() = learner_id` tenant isolation policies protecting all user states.' },
          { icon: RefreshCw, title: 'Realtime WebSocket Bus', text: 'Change Data Capture (CDC) streams microsecond progress updates across devices.' },
          { icon: Boxes, title: 'Immutable Audit Log', text: 'Append-only ledger of test executions and verifiable certificate issuances.' },
        ],
        diagram: `┌────────────────────────────────────────────────────────┐
│           CLIENT HTTP / WEBSOCKET SESSIONS             │
│   JSON Web Token (JWT) + Ed25519 Role Claims           │
└───────────────────────────┬────────────────────────────┘
                            │ Authenticated Transport
                            ▼
┌────────────────────────────────────────────────────────┐
│      SUPABASE POSTGRESQL ROW LEVEL SECURITY (RLS)      │
│   ├─ \`auth.uid() = learner_id\` Tenant Isolation Barrier│
│   ├─ Assessment Records Restricted to Certified Review │
│   └─ Automated Checkpoint & Realtime Leaderboard Sync  │
└─────────────┬────────────────────────────┬─────────────┘
              │                            │
              ▼ Write Replicas             ▼ CDC Stream
  ┌───────────────────────┐    ┌───────────────────────┐
  │ POSTGRES ACID STORAGE │    │ SUPABASE REALTIME BUS │
  │ Progress & Cert Proof │    │ Microsecond WebSocket │
  └───────────────────────┘    └───────────────────────┘`,
      },
    ],
  },
  corex: {
    label: 'Corex',
    slides: [
      {
        tag: '01 STUDIO PIPELINE',
        label: 'Studio Pipeline',
        eyebrow: 'Browser-Native GPU Architecture',
        title: 'Natural-Language to GPU Vector Pipeline',
        summary:
          'End-to-end studio pipeline converting design intent into reviewable tasks, queueing them through the Zustand store, and rendering editable vector layers on the WebGL2 stage.',
        points: [
          { icon: Workflow, title: 'Intent AST Compiler', text: 'Translates high-level natural language prompts into a verifiable DAG of draw actions.' },
          { icon: Sparkles, title: 'WebGL2 Shader Engine', text: 'Custom GLSL fragment shaders render dynamic vectors and real-time lighting at 60 FPS.' },
          { icon: Boxes, title: 'Zero-Copy OPFS Vault', text: 'Direct disk binary serialization (.cxbin) with instant 64-frame undo/redo ring buffer.' },
        ],
        diagram: `┌────────────────────────────────────────────────────────┐
│           INTENT DECODER & PROMPT REASONER             │
│   Natural Language Brief ──► AST Parser ──► Task Spec  │
└───────────────────────────┬────────────────────────────┘
                            │ Validated Action Tuple
                            ▼
┌────────────────────────────────────────────────────────┐
│        DETERMINISTIC ZUSTAND TRANSACTION STORE         │
│   ├─ 64-Frame Immutable Ring Buffer (Zero-Alloc Undo)   │
│   ├─ Hierarchical Scene Graph & Spatial Index          │
│   └─ Microsecond Mutation Broadcast Bus               │
└─────────────┬────────────────────────────┬─────────────┘
              │                            │
              ▼                            ▼
  ┌───────────────────────┐    ┌───────────────────────┐
  │ 60 FPS RENDER ENGINE  │    │  PERSISTENCE STORAGE  │
  │ WebGL2 / GLSL Shaders │    │  Origin Private FS    │
  │ Live Vector Meshes    │    │  Binary .cxbin Vault  │
  └───────────┬───────────┘    └───────────────────────┘
              │
              ▼
┌────────────────────────────────────────────────────────┐
│            HARDWARE-ACCELERATED OUTPUT STAGE           │
│   4K Rasterizer · Multi-Format SVG/PDF/PNG Serializer  │
└────────────────────────────────────────────────────────┘`,
      },
      {
        tag: '02 GPU SHADERS',
        label: 'WebGL2 Render Loop',
        eyebrow: 'Hardware-Accelerated Vector Graphics',
        title: 'Locked 60 FPS GLSL Shader Render Loop',
        summary:
          'Direct GPU rendering pipeline bypassing DOM and Canvas2D overhead. Employs instanced Vertex Buffer Objects (VBO) and custom Signed Distance Field (SDF) fragment shaders.',
        points: [
          { icon: Layers, title: 'SDF Vector Primitives', text: 'Signed Distance Field shaders render ultra-crisp bezier curves at arbitrary zoom levels.' },
          { icon: Zap, title: 'Instanced Draw Calls', text: 'Batching thousands of vector paths into unified GPU draw calls for zero CPU bottlenecks.' },
          { icon: RefreshCw, title: 'Double-Buffered Swap', text: 'Locked 16.6ms frame intervals avoiding micro-stutter and frame teardown.' },
        ],
        diagram: `┌────────────────────────────────────────────────────────┐
│           ACTIVE SCENE GRAPH VECTOR NODES              │
│   Bezier Curves · Compound Paths · Gradient Fills      │
└───────────────────────────┬────────────────────────────┘
                            │ Tessellation & Triangulation
                            ▼
┌────────────────────────────────────────────────────────┐
│         VERTEX & INDEX BUFFER OBJECT ARRAYS (VBO/EBO)  │
│   Interleaved Float32 Attributes (Pos, UV, Norm, Color)│
└───────────────────────────┬────────────────────────────┘
                            │ GPU DrawCall (Instanced)
                            ▼
┌────────────────────────────────────────────────────────┐
│           CUSTOM GLSL FRAGMENT SHADER PIPELINE         │
│   ├─ Anti-Aliased Signed Distance Field (SDF) Vectors  │
│   ├─ Dynamic Lighting, Blur & Procedural Shader FX     │
│   └─ Hardware Double-Buffered Swap Chain Framebuffer   │
└─────────────┬──────────────────────────────────────────┘
              │ Locked 16.6ms Target (60.0 FPS)
              ▼
┌────────────────────────────────────────────────────────┐
│          ZERO-JANK RETINA CANVAS PRESENTATION          │
│   Sub-Pixel Precision · Zero DOM Reflow Overhead       │
└────────────────────────────────────────────────────────┘`,
      },
      {
        tag: '03 OPFS BINARY VAULT',
        label: 'OPFS Binary Storage',
        eyebrow: 'Local-First Zero-Copy Storage',
        title: 'Microsecond Direct Disk .cxbin Serialization',
        summary:
          'Origin Private File System (OPFS) architecture providing near-native file I/O speed. Worker threads serialize scene graphs directly into binary ArrayBuffers.',
        points: [
          { icon: Database, title: 'SyncAccessHandle I/O', text: 'Synchronous zero-lock disk writing directly inside a dedicated Web Worker thread.' },
          { icon: Cpu, title: 'Binary FlatBuffers Format', text: 'Zero-copy serialization avoiding JSON encoding/decoding overhead.' },
          { icon: Lock, title: 'Local Vault Durability', text: 'Encrypted browser-native sandbox storage impervious to network dropouts.' },
        ],
        diagram: `┌────────────────────────────────────────────────────────┐
│           IN-MEMORY SCENE GRAPH SNAPSHOT               │
│   Layer Primitives, Shaders, Style Rules, Metadata     │
└───────────────────────────┬────────────────────────────┘
                            │ Zero-Copy Transfer
                            ▼
┌────────────────────────────────────────────────────────┐
│        DEDICATED WEB WORKER SERIALIZATION THREAD       │
│   ├─ FlatBuffers / Typed Array Binary Encoder          │
│   ├─ Zstandard In-Memory Stream Compression            │
│   └─ .cxbin Binary Header & CRC32 Checksum Validation  │
└─────────────┬──────────────────────────────────────────┘
              │ Direct FileSystemSyncAccessHandle
              ▼
┌────────────────────────────────────────────────────────┐
│       ORIGIN PRIVATE FILE SYSTEM (OPFS) VAULT          │
│   Sub-Millisecond Direct Disk I/O · Zero Memory Leaks  │
└─────────────┬──────────────────────────────────────────┘
              │ Instant Cold Restart
              ▼
┌────────────────────────────────────────────────────────┐
│            LOCAL PROJECT HYDRATION PIPELINE            │
│   Microsecond Memory Mapping Without Network Latency   │
└────────────────────────────────────────────────────────┘`,
      },
      {
        tag: '04 RING BUFFER',
        label: '64-Frame Ring Buffer',
        eyebrow: 'Immutable Transaction Ledger',
        title: 'Zero-Allocation Time-Travel Undo/Redo Ledger',
        summary:
          'A fixed-size circular ring buffer holding 64 pre-allocated state deltas. Guarantees zero heap allocations during user interaction while enabling instantaneous undo/redo.',
        points: [
          { icon: RefreshCw, title: 'Static Ring Pre-allocation', text: '64 pre-allocated memory slots avoid Garbage Collector pauses during fast brushstrokes.' },
          { icon: Zap, title: 'Inverted Delta Math', text: 'Every mutation records mathematically reversible vectors for instantaneous rollback.' },
          { icon: Boxes, title: 'Branching Time-Travel', text: 'State tree snapshots preserve revision history across editing sessions.' },
        ],
        diagram: `┌────────────────────────────────────────────────────────┐
│         USER ACTION DISPATCHER & TOOL MUTATION         │
│   Transform · Layer Move · Node Split · Color Tweak    │
└───────────────────────────┬────────────────────────────┘
                            │ Action Payload
                            ▼
┌────────────────────────────────────────────────────────┐
│      CIRCULAR 64-SLOT TRANSACTION RING BUFFER          │
│   ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐        │
│   │ 0 │ 1 │ 2 │ 3 │...│58 │59 │60 │61 │62 │63 │ (Head) │
│   └───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘        │
│   ├─ Forward Delta Vector (Redo Operations)            │
│   ├─ Inverted Delta Vector (Instant Undo Operations)   │
│   └─ Zero Heap Reallocations (Static Buffer Ring)      │
└─────────────┬────────────────────────────┬─────────────┘
              │                            │
              ▼ Redo Fast-Forward          ▼ Instant Undo Step
  ┌───────────────────────┐    ┌───────────────────────┐
  │ APPLY FORWARD DIFF    │    │ REVERT INVERTED DIFF  │
  │ Next Frame State Sync │    │ Prev Frame State Sync │
  └───────────────────────┘    └───────────────────────┘`,
      },
      {
        tag: '05 SPATIAL BVH',
        label: 'Spatial BVH & Export',
        eyebrow: 'Spatial Indexing & Production Export',
        title: 'Bounding Volume Hierarchy & Multi-Format Serializer',
        summary:
          'Hierarchical BVH spatial index powering lightning-fast viewport culling and selection across 10,000+ objects, coupled with a multi-format vector export engine.',
        points: [
          { icon: Layers, title: 'AABB Tree Query', text: 'Microsecond bounding-box queries for box-select, point hit testing, and snapping.' },
          { icon: Workflow, title: 'Matrix Transformations', text: 'Hardware-accelerated affine transform matrices for compound layer hierarchies.' },
          { icon: FileCheck2, title: 'Clean Vector Output', text: 'Zero-overhead export to SVG paths, PDF vector streams, and 4K raster maps.' },
        ],
        diagram: `┌────────────────────────────────────────────────────────┐
│           BOUNDING VOLUME HIERARCHY (BVH TREE)         │
│   AABB Spatial Indexing For 10,000+ Canvas Objects     │
└───────────────────────────┬────────────────────────────┘
                            │ Microsecond Spatial Query
                            ▼
┌────────────────────────────────────────────────────────┐
│       MATRIX TRANSFORM & GEOMETRY SERIALIZER           │
│   ├─ Fast Frustum Culling & Viewport Clipping          │
│   ├─ Curve Simplification & Non-Destructive Flattening │
│   └─ Color Profile Harmonization (Display P3 to sRGB)  │
└─────────────┬──────────────────────────────────────────┘
              │ Target Export Encoding
              ▼
┌────────────────────────────────────────────────────────┐
│            MULTI-FORMAT PRODUCTION EXPORT              │
│   ├─ Clean Vector Scalable Graphic (SVG)               │
│   ├─ Print-Ready Vector PDF (CMYK Profile Support)     │
│   ├─ 4K Lossless PNG / WebP Hardware Rasterizer        │
│   └─ Raw Portable Binary Archive (.cxbin)              │
└────────────────────────────────────────────────────────┘`,
      },
    ],
  },
} as const

function ArchitectureConsole() {
  const [activeProject, setActiveProject] = useState<keyof typeof architectureViews>('lernex')
  const [slideIndex, setSlideIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const projectConfig = architectureViews[activeProject]
  const slides = projectConfig.slides
  const currentSlide = slides[slideIndex] || slides[0]
  const totalSlides = slides.length

  function handleSelectProject(key: keyof typeof architectureViews) {
    setActiveProject(key)
    setSlideIndex(0)
  }

  function handlePrevSlide() {
    setSlideIndex((idx) => (idx > 0 ? idx - 1 : totalSlides - 1))
  }

  function handleNextSlide() {
    setSlideIndex((idx) => (idx < totalSlides - 1 ? idx + 1 : 0))
  }

  return (
    <section className="architecture page-grid" aria-labelledby="architecture-title">
      <div className="architecture-heading">
        <span className="eyebrow">Systems Topology & Engine Design</span>
        <h2 id="architecture-title">
          The thinking<br />
          <em>behind the screen.</em>
        </h2>
        <p>
          A rigorous architectural breakdown of data flows, memory isolation boundaries, and distributed state
          machines. Slide through dedicated ASCII blueprints below.
        </p>
        <div className="architecture-project-picker" aria-label="Choose a system to explore">
          {(Object.keys(architectureViews) as (keyof typeof architectureViews)[]).map((key, index) => (
            <button
              key={key}
              type="button"
              aria-pressed={activeProject === key}
              className={`architecture-project-option${activeProject === key ? ' active' : ''}`}
              onClick={() => handleSelectProject(key)}
            >
              <span className="project-option-number">0{index + 1}</span>
              <span className="project-option-copy"><strong>{architectureViews[key].label}</strong><small>{architectureViews[key].slides.length} system maps</small></span>
              <ArrowUpRight size={15} />
            </button>
          ))}
        </div>
      </div>

      <div
        className="architecture-screen"
        role="region"
        aria-label={`${projectConfig.label} architecture slides`}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.target instanceof HTMLElement && event.target.closest('button, a, input, pre')) return
          if (event.key === 'ArrowLeft') {
            event.preventDefault()
            handlePrevSlide()
          } else if (event.key === 'ArrowRight') {
            event.preventDefault()
            handleNextSlide()
          }
        }}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null
        }}
        onTouchEnd={(event) => {
          const startX = touchStartX.current
          touchStartX.current = null
          if (startX === null || (event.target instanceof HTMLElement && event.target.closest('pre, button, a'))) return
          const deltaX = event.changedTouches[0].clientX - startX
          if (Math.abs(deltaX) < 64) return
          if (deltaX < 0) handleNextSlide()
          else handlePrevSlide()
        }}
      >
        <div className="architecture-windowbar">
          <span>
            <i />
            <i />
            <i />
          </span>
          <p>
            <Braces size={13} /> {projectConfig.label.toUpperCase()} // {currentSlide.tag}
          </p>
          <span>
            DIAGRAM 0{slideIndex + 1} / 0{totalSlides}
          </span>
        </div>

        <div className="architecture-content" key={`${activeProject}-${slideIndex}`} role="group" aria-label={`${currentSlide.label}, slide ${slideIndex + 1} of ${totalSlides}`}>
          <div className="architecture-code">
            <div className="code-label">
              <span>ASCII / {currentSlide.tag}</span>
              <span>SLIDE 0{slideIndex + 1} OF 0{totalSlides}</span>
            </div>
            <pre>{currentSlide.diagram}</pre>
          </div>
          <div className="architecture-explainer">
            <span className="eyebrow">{currentSlide.eyebrow}</span>
            <h3>{currentSlide.title}</h3>
            <p className="architecture-summary">{currentSlide.summary}</p>
            <div className="architecture-points">
              {currentSlide.points.map(({ icon: Icon, title, text }, index) => (
                <article key={title}>
                  <span className="architecture-point-icon">
                    <Icon size={16} />
                  </span>
                  <div>
                    <span className="eyebrow">0{index + 1}</span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="architecture-screenfoot">
          <span>
            {currentSlide.tag} · {slideIndex + 1} / {totalSlides}
          </span>
          <span className="architecture-key-hint">Use ← → or swipe to move</span>
        </div>
      </div>

      <nav className="architecture-deck-controls" aria-label={`${projectConfig.label} slide navigation`}>
        <button className="deck-arrow" type="button" onClick={handlePrevSlide} aria-label="Previous architecture slide" title="Previous slide">
          <ChevronLeft size={17} />
        </button>
        <div className="architecture-chapter-rail" role="group" aria-label="Choose architecture slide">
          {slides.map((slide, index) => (
            <button
              key={slide.tag}
              type="button"
              className={`architecture-chapter${slideIndex === index ? ' active' : ''}`}
              aria-label={`Show slide ${index + 1}: ${slide.label}`}
              aria-current={slideIndex === index ? 'step' : undefined}
              onClick={() => setSlideIndex(index)}
            >
              <span>0{index + 1}</span><small>{slide.label}</small>
            </button>
          ))}
        </div>
        <button className="deck-arrow next" type="button" onClick={handleNextSlide} aria-label="Next architecture slide" title="Next slide">
          <ChevronRight size={17} />
        </button>
      </nav>
    </section>
  )
}

export default function Portfolio() {
  return (
    <main className="site-shell">
      <PortfolioChatbot />
      <nav className="topbar page-grid" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Sourav, back to top">
          <span className="brand-mark">
            S<span>.</span>
          </span>
          <span className="brand-lockup">
            <span className="brand-name">SOURAV</span>
            <span className="brand-caption">SYSTEMS · ARCHITECTURE</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Systems</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-contact" href="mailto:iamsouravamaurya@gmail.com">
          <span className="nav-contact-dot" />
          Let&apos;s architect together <ArrowUpRight size={15} />
        </a>
      </nav>

      <section id="top" className="hero page-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-kicker">
            <span className="availability-dot" /> PRINCIPAL SYSTEMS ARCHITECT <span className="kicker-slash">/</span> DELHI, INDIA
          </p>
          <h1>
            Hi, I&apos;m <span className="hero-name">Sourav.</span>
            <br />
            I architect high-performance <em>systems.</em>
          </h1>
          <p className="hero-lede">
            Bridging low-level system architecture and ergonomics. I engineer browser-native computing runtimes, distributed
            LLM routing pipelines, and zero-latency interfaces built for scale.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore production systems <ArrowDown size={16} />
            </a>
            <a className="text-link" href="#about">
              Architectural philosophy <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="hero-stage" aria-label="Sourav's approach to building systems">
          <div className="stage-topline">
            <span>HIGH-PERFORMANCE RUNTIMES</span>
            <span>ZERO ARCHITECTURAL BURN</span>
          </div>
          <div className="stage-type">
            Build for<br />
            <em>throughput.</em>
          </div>
          <div className="stage-bottom">
            <Sparkles size={17} />
            <span>
              From low-level data structures<br />
              to seamless human interaction.
            </span>
            <span className="stage-arrow">
              <ArrowDown size={18} />
            </span>
          </div>
          <span className="stage-index">S / 2026</span>
          <span className="stage-sticker">
            CODE<br />
            <b>→</b>
            <br />
            SCALE
          </span>
        </div>
        <a className="hero-scroll" href="#about">
          <span>Scroll to explore</span>
          <ArrowDown size={14} />
        </a>
      </section>

      <section className="craft-ribbon" aria-label="Product design and engineering skills">
        <div className="craft-ribbon-track">
          {[0, 1].map((copy) => (
            <div className="craft-ribbon-set" key={copy} aria-hidden={copy === 1}>
              <span>DISTRIBUTED ARCHITECTURE</span>
              <i>✳</i>
              <span>LOCAL-FIRST SYSTEMS</span>
              <i>✳</i>
              <span>WEBGL2 SHADER PIPELINES</span>
              <i>✳</i>
              <span>CONTEXTUAL LLM WORKFLOWS</span>
              <i>✳</i>
              <span>WEBASSEMBLY RUNTIMES</span>
              <i>✳</i>
              <span>ZERO-BURN COMPUTING</span>
              <i>✳</i>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about page-grid">
        <div className="about-heading">
          <span className="eyebrow">A little about me</span>
          <h2>
            Relentless precision.<br />
            <em>First-principles thinking.</em>
          </h2>
          <span className="about-stamp">
            S<span>.</span>
          </span>
        </div>
        <div className="about-copy">
          <p className="about-lede">
            I&apos;m Sourav — a systems-minded product architect and engineering mentor based in Delhi, India.
          </p>
          <p>
            I design and implement digital architectures that eliminate superfluous abstraction. Whether optimizing
            WebGL2 draw calls, crafting resilient multi-model failover topologies, or architecting cryptographic proof
            mechanisms, my standard is deterministic performance and absolute clarity.
          </p>
          <p>
            True engineering elegance happens where algorithmic rigor intersects intuitive ergonomics. I focus on building
            resilient software foundations capable of handling volatile real-world demands without degradation. I also mentor
            engineering cohorts in modern distributed systems, WebAssembly, and browser graphics.
          </p>
          <div className="about-details">
            <div>
              <span className="eyebrow">Core focus areas</span>
              <p>Distributed systems · WebAssembly · browser-native storage · LLM orchestration</p>
            </div>
            <div>
              <span className="eyebrow">Active research & development</span>
              <p>Zero-copy binary protocols · local-first state sync · GPU compute in the browser</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="work-intro page-grid">
        <span className="eyebrow">Selected systems · 2026</span>
        <div>
          <h2>
            High-leverage engineering,<br />
            <em>made tangible.</em>
          </h2>
          <p>Two production-grade architectures, each solving deep compute and interface constraints.</p>
        </div>
        <a className="work-index" href="#lernex">
          <span>01</span> LernexAI <ArrowDown size={15} />
        </a>
      </section>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectChapter project={project} key={project.id} />
        ))}
      </div>

      <ArchitectureConsole />

      <section className="approach page-grid">
        <span className="eyebrow">Engineering principles</span>
        <div className="approach-list">
          <article>
            <span>01</span>
            <div>
              <h3>Deconstruct to first principles.</h3>
              <p>
                Strip away superficial assumptions. Model domain invariants, memory constraints, and runtime throughput before
                committing to architecture.
              </p>
            </div>
            <Sparkles size={19} />
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Unify system power with human clarity.</h3>
              <p>
                Engineer low-level systems with uncompromising efficiency while delivering ergonomic, instantaneous feedback to the
                end user.
              </p>
            </div>
            <Sparkles size={19} />
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Deterministic, continuous benchmarking.</h3>
              <p>
                Validate assumptions through profiling, micro-benchmarks, and fault injection to guarantee mission-critical durability.
              </p>
            </div>
            <Sparkles size={19} />
          </article>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-inner page-grid">
          <div className="footer-orbit" aria-hidden="true">
            <span>S</span>
            <i />
            <i />
            <i />
          </div>
          <span className="eyebrow">
            <span className="availability-dot" /> AVAILABLE FOR HIGH-IMPACT INITIATIVES
          </span>
          <h2>
            Building something ambitious?<br />
            <em>Let&apos;s architect it.</em>
          </h2>
          <p className="footer-note">
            From technical advisory to full-scale platform engineering. Let&apos;s discuss high-leverage challenges and mission-critical
            roadmaps.
          </p>
          <div className="footer-bottom">
            <a className="button button-light" href="mailto:iamsouravamaurya@gmail.com">
              Initiate collaboration <Mail size={16} />
            </a>
            <a className="button button-whatsapp" href="https://wa.me/918527796255?text=Hi%20Sourav%2C%20I%20saw%20your%20portfolio." target="_blank" rel="noreferrer">
              WhatsApp · +91 85277 96255 <MessageCircle size={16} />
            </a>
            <div className="contact-info">
              <a href="mailto:iamsouravamaurya@gmail.com">iamsouravamaurya@gmail.com</a>
              <span>
                <MapPin size={14} /> Delhi, India
              </span>
            </div>
            <a className="social-link" href="https://github.com/iamsouravmourya-jpg" aria-label="Sourav's GitHub profile">
              <GitBranch size={19} />
            </a>
          </div>
          <div className="footer-signoff">
            <span>ZERO-BURN ARCHITECTURE · DETERMINISTIC RUNTIMES</span>
            <span>
              S<span>.</span>
            </span>
            <span>© 2026 SOURAV</span>
          </div>
          <div className="copyright">
            <span>Engineered with first principles. Executed with precision.</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

