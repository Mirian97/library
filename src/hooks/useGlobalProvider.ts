'use client'
import { defaultBookItem, defaultBooks } from '@/constants/book'
import IBook from '@/interfaces/IBook'
import IBookItem from '@/interfaces/IBookItem'
import { getBooks, getOneBook } from '@/services/book'
import { messageError } from '@/utils/toast'
import { useEffect, useState } from 'react'

const useGlobalContextProvider = () => {
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [books, setBooks] = useState<IBook>(defaultBooks)
  const [activeBook, setActiveBook] = useState<IBookItem>(defaultBookItem)
  const [isLoadingBooks, setIsLoadingBooks] = useState(true)
  const toggleSearchInput = () => setShowSearchInput(!showSearchInput)

  const handleGetBooks = async () => {
    setIsLoadingBooks(true)
    try {
      const response = await getBooks()
      setBooks(response)
    } catch (error) {
      messageError('Não foi possível carregar os dados dos livros')
    } finally {
      setIsLoadingBooks(false)
    }
  }

  const handleGetOneBook = async (bookId: string) => {
    try {
      const response = await getOneBook(bookId)
      setActiveBook(response)
    } catch (error) {
      messageError('Não foi possível carregar os dados do livro')
    }
  }

  useEffect(() => {
    handleGetBooks()
  }, [])

  return {
    showSearchInput,
    toggleSearchInput,
    books,
    isLoadingBooks,
    handleGetOneBook
  }
}

export default useGlobalContextProvider
