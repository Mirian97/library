/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { defaultBooks } from '@/constants/book'
import IBook from '@/interfaces/IBook'
import { useState } from 'react'

const useGlobalContextProvider = () => {
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [books, setBooks] = useState<IBook>(defaultBooks)
  const [isLoadingBooks, setIsLoadingBooks] = useState(true)
  const toggleSearchInput = () => setShowSearchInput(!showSearchInput)
  const closeSearchInput = () => setShowSearchInput(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  // const handleGetBooks = async () => {
  //   setIsLoadingBooks(true)
  //   try {
  //     const response = await getBooks(searchInputValue)
  //     setBooks(response)
  //   } catch (error) {
  //     messageError('Não foi possível carregar os dados dos livros')
  //   } finally {
  //     setIsLoadingBooks(false)
  //   }
  // }

  // useEffect(() => {
  //   searchInputValue &&
  //     setTimeout(() => {
  //       handleGetBooks()
  //     }, 2000)
  // }, [searchInputValue])

  // useEffect(() => {
  //   handleGetBooks()
  // }, [])

  return {
    showSearchInput,
    toggleSearchInput,
    closeSearchInput,
    books,
    isLoadingBooks,
    setSearchInputValue,
    searchInputValue
  }
}

export default useGlobalContextProvider
