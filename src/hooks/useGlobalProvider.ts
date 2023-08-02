'use client'
import { defaultBooks } from '@/constants/book'
import IBook from '@/interfaces/IBook'
import { getBooks } from '@/services/book'
import { messageError } from '@/utils/toast'
import { useEffect, useState } from 'react'

const useGlobalContextProvider = () => {
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [books, setBooks] = useState<IBook>(defaultBooks)
  const [isLoadingBooks, setIsLoadingBooks] = useState(true)
  const toggleSearchInput = () => setShowSearchInput(!showSearchInput)
  const closeSearchInput = () => setShowSearchInput(false)

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

  useEffect(() => {
    handleGetBooks()
  }, [])

  return {
    showSearchInput,
    toggleSearchInput,
    closeSearchInput,
    books,
    isLoadingBooks
  }
}

export default useGlobalContextProvider
