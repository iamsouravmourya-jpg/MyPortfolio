import Portfolio from '@/components/portfolio'

export default function Page() {
  return <Portfolio />
}

// v0 Design System Showcase Page
export const dynamic = 'force-static'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sourav // Product Architect',
  description: 'Portfolio of Sourav — a next-gen product architect and full-stack engineer building browser-native, zero-burn software architecture.',
}

// Note: metadata is exported from layout in Next.js app router; this page remains intentionally minimal.
