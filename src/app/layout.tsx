import Header from '@/components/Header/Header'
import { GlobalProvider } from '@/contexts/GlobalContext'
import type { Metadata } from 'next'
import { MuseoModerno } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  weight: ['400', '500', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Livros Conectados',
  description:
    'Explore uma vasta coleção de livros em nosso site, com uma busca fácil e rápida por nome. Descubra detalhes fascinantes de cada livro com apenas um clique!'
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang='pt-br' data-testid='root-layout'>
    <body className={museoModerno.className}>
      <GlobalProvider>
        <ToastContainer />
        <Header />
        <div className='main-container'>{children}</div>
      </GlobalProvider>
    </body>
  </html>
)

export default RootLayout
