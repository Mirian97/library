'use client'
import useGlobal from '@/hooks/useGlobal'
import Image from 'next/image'
import BookItem from './BookItem'

export const BookList = () => {
  const { books, isLoadingBooks } = useGlobal()
  return (
    <div className='flex flex-wrap justify-evenly gap-6 mt-5'>
      {isLoadingBooks ? (
        <Image
          src='/svg/loading.svg'
          alt='Carregando...'
          width={80}
          height={80}
          className='mt-5'
        />
      ) : (
        books.items.map((book) => <BookItem key={book.id} {...book} />)
      )}
    </div>
  )
}
