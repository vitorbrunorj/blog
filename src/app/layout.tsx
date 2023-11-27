import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import type { Metadata } from 'next'
import { Open_Sans as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import { ThemeProvider } from './_components/theme-provider'

import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading'
})

export const metadata: Metadata = {
  title: 'Keyko Terapias - Home',
  description: 'Curso Full-stack Next.js 14',
  keywords: [
    'Next.js',
    'Next.js 14',
    'React.js',
    'Lucas Nhimi',
    'Curso Next.js',
    'JavaScript',
    'TypeScript',
    'Full-stack',
    'Tailwind CSS'
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="./favicon.ico" type="image/ico" />
        <title>Keyko Terapias - Home</title>
        <meta name="description" content="Curso Full-stack Next.js 14" />
        <meta
          name="keywords"
          content="Next.js, Next.js 14, React.js, Lucas Nhimi, Curso Next.js, JavaScript, TypeScript, Full-stack, Tailwind CSS"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
