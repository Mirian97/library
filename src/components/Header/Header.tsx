/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import useGlobal from '@/hooks/useGlobal'
import { Search, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Button from '../Button'
import Input from '../Input'

const Header = () => {
  const { onChangeSearchInput } = useGlobal()
  const [showSearchInput, setShowSearchInput] = useState(false)
  const toggleSearchInput = () => setShowSearchInput(!showSearchInput)
  const closeSearchInput = () => setShowSearchInput(false)
  const [isHome, setIsHome] = useState(false)
  const pathname = usePathname()
  const iconButtonProps = { className: 'cursor-pointer', color: 'white', size: 28 }

  useEffect(() => {
    setIsHome(pathname === '/livros')
  }, [pathname])
  useEffect(() => {
    !isHome && closeSearchInput()
  }, [isHome])

  const renderIconButton = () => (
    <Button onClick={toggleSearchInput} variant='plain'>
      {showSearchInput ? <X {...iconButtonProps} /> : <Search {...iconButtonProps} />}
    </Button>
  )

  return (
    <header className={`header ${showSearchInput && 'show'}`}>
      <div className='main-container'>
        <div className='flex items-center justify-between'>
          <Link href='/livros' className='flex items-center'>
            <Image src='/svg/books.svg' width={52} height={52} alt='Logo' />
            <span className='text-xl text-white font-bold max-w-[150px]'>
              Livros Conectados
            </span>
          </Link>
          {isHome && renderIconButton()}
        </div>
        <Input
          type='search'
          id='search'
          placeholder='Buscar por livro...'
          className={`m-auto ${showSearchInput ? 'flex' : ' hidden'}`}
          onChange={onChangeSearchInput}
        />
      </div>
    </header>
  )
}

export default Header
