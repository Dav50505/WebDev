import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'David Ginzburg | Front-End Developer',
  description: 'Professional portfolio showcasing React, Next.js, and TypeScript development projects. Specializing in modern web applications with exceptional user experiences.',
  keywords: ['React', 'Next.js', 'TypeScript', 'Front-End Developer', 'Web Developer', 'JavaScript'],
  authors: [{ name: 'David Ginzburg' }],
  openGraph: {
    title: 'David Ginzburg | Front-End Developer',
    description: 'Professional portfolio showcasing React, Next.js, and TypeScript development projects.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Ginzburg | Front-End Developer',
    description: 'Professional portfolio showcasing React, Next.js, and TypeScript development projects.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StructuredData />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

