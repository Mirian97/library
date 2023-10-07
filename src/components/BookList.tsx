/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { defaultBooks } from '@/constants/book'
import useDebounce from '@/hooks/useDebounce'
import useGlobal from '@/hooks/useGlobal'
import IBook from '@/interfaces/IBook'
import { getBooks } from '@/services/book'
import { messageError } from '@/utils/toast'
import { memo, useEffect, useState } from 'react'
import BookItem from './BookItem/BookItem'
import Loading from './Loading/Loading'

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
    <div className='flex flex-wrap justify-center gap-6 mt-7'>
      {isLoadingBooks ? (
        <Loading className='mt-5' />
      ) : books.totalItems ? (
        books.items.map((book) => <BookItem key={book.id} {...book} />)
      ) : (
        <h5 className='text-lg'>Não há livros para o termo pesquisado</h5>
      )}
    </div>
  )
}

export default memo(BookList)
