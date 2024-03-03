/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { defaultBooks } from '@/constants/book'
import useDebounce from '@/hooks/useDebounce/useDebounce'
import useGlobal from '@/hooks/useGlobal'
import IBook from '@/interfaces/IBook'
import { getBooks } from '@/services/book/book'
import { messageError } from '@/utils/toast/toast'
import { motion } from 'framer-motion'
import { memo, useEffect, useState } from 'react'
import BookItem from '../BookItem/BookItem'
import Loading from '../Loading/Loading'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const BookList = () => {
  const { searchInputValue } = useGlobal()
  const searchDebounced = useDebounce(searchInputValue)
  const [books, setBooks] = useState<IBook>(defaultBooks)
  const [isLoadingBooks, setIsLoadingBooks] = useState(true)

  const handleGetBooks = async () => {
    setIsLoadingBooks(true)
    try {
      const response = await getBooks(searchDebounced)
      setBooks(response)
    } catch (error) {
      messageError('Não foi possível carregar os dados dos livros')
    } finally {
      setIsLoadingBooks(false)
    }
  }

  useEffect(() => {
    handleGetBooks()
  }, [searchDebounced])

  return (
    <div className='flex flex-wrap justify-center mt-7 mb-4' data-testid='book-list'>
      {isLoadingBooks ? (
        <Loading className='mt-5' />
      ) : books.totalItems ? (
        <motion.div
          variants={container}
          initial='hidden'
          animate='visible'
          className='flex flex-wrap justify-center gap-6 max-w-[1200px]'
        >
          {books.items.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </motion.div>
      ) : (
        <h5 className='text-lg'>Não há livros para o termo pesquisado</h5>
      )}
    </div>
  )
}

export default memo(BookList)
