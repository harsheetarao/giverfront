import type { Metadata } from 'next'
import ComponentShowcase from '@/components/ComponentShowcase'

export const metadata: Metadata = {
  title: 'Component Library Showcase',
  description: 'A showcase of our custom React components built with Next.js and Tailwind CSS',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ComponentShowcase />
    </main>
  )
}
