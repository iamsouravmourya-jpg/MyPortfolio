# Sourav | Systems Architect

Personal portfolio for Sourav, a systems-minded product architect and engineering mentor based in Delhi, India.

The site presents two browser-native systems, their architecture diagrams, a guided offline portfolio assistant, and direct contact options.

## Featured systems

### LernexAI

A technical learning platform combining interactive lessons, in-browser WebAssembly sandboxes, contextual tutoring, proctored assessments, and verifiable credentials.

- [Live site](https://lernexai.vercel.app/)
- [Source repository](https://github.com/iamsouravmourya-jpg/LernexAI)
- Portfolio image: [`public/lernexai.png`](public/lernexai.png)

### Corex Quantum Studio

A browser-native creative studio focused on editable vector work, WebGL2/GLSL rendering, local project storage, and a guided design workflow.

- [Live site](https://corex-vert.vercel.app/)
- [Source repository](https://github.com/iamsouravmourya-jpg/Corex)
- Portfolio image: [`public/corex.png`](public/corex.png)

The portfolio's architecture section includes five navigable system diagrams for each project. Slides can be changed with the chapter rail, previous/next controls, keyboard arrows, or touch gestures.

## Portfolio assistant

“My Portfolio AI” is a fully client-side, offline guide. Visitors choose from predefined topics to see locally stored answers about Sourav, LernexAI, Corex, and the architecture section. It does not call an AI service or require an API key.

Contact options are available by email and [WhatsApp](https://wa.me/918527796255).

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Lucide icons

## Run locally

Requirements: Node.js compatible with Next.js 16 and Bun.

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
bun run typecheck
bun run build
bun run start
```

The portfolio itself does not require environment variables. The LernexAI and Corex products are separate applications with their own configuration.

## Deploy to Vercel

1. Import `iamsouravmourya-jpg/MyPortfolio` into Vercel.
2. Keep the framework preset set to **Next.js**.
3. Use the default install and build commands, or set the build command to `bun run build` if the project is configured to install with Bun.
4. Deploy. No portfolio-specific environment variables are required.

## Contact

- Email: [iamsouravamaurya@gmail.com](mailto:iamsouravamaurya@gmail.com)
- WhatsApp: [Message Sourav](https://wa.me/918527796255)
- GitHub: [@iamsouravmourya-jpg](https://github.com/iamsouravmourya-jpg)
