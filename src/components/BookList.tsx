/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { defaultBooks } from '@/constants/book'
import useDebounce from '@/hooks/useDebounce'
import IBook from '@/interfaces/IBook'
import { getBooks } from '@/services/book'
import { messageError } from '@/utils/toast'
import Image from 'next/image'
import { ChangeEvent, memo, useEffect, useState } from 'react'
import BookItem from './BookItem'
import Input from './Input'

const BookList = () => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const [books, setBooks] = useState<IBook>({ ...defaultBooks })
  const [isLoadingBooks, setIsLoadingBooks] = useState(true)
  const searchDebounced = useDebounce(searchInputValue, 700)
  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchInputValue(e.target.value)

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
    if (searchDebounced) {
      handleGetBooks()
      console.log('ola com debounce')
    } else {
      handleGetBooks()
      console.log('ola normal')
    }
  }, [searchDebounced])

  return (
    <div className='flex flex-col items-center mt-4'>
      <Input
        id='search'
        type='search'
        placeholder='Buscar por livro...'
        onChange={onChangeSearchInput}
      />
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
          books.items?.map((book) => <BookItem key={book.id} {...book} />)
        )}
      </div>
    </div>
  )
}

export default memo(BookList)
