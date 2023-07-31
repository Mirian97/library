import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Livros Conectados',
  description:
    'Explore uma vasta coleção de livros em nosso site, com uma busca fácil e rápida por nome. Descubra detalhes fascinantes de cada livro com apenas um clique!'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
