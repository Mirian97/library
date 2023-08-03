import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

const Header = () => (
  <header className={`header`}>
    <div className='main-container'>
      <div className='flex items-center justify-between'>
        <Link href='/livros' className='flex items-center'>
          <Image src='/svg/books.svg' width={52} height={52} alt='Logo' />
          <span className='text-xl text-white font-bold max-w-[150px]'>
            Livros Conectados
          </span>
        </Link>
      </div>
    </div>
  </header>
)

export default memo(Header)
