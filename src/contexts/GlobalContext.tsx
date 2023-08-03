'use client'
import useGlobalProvider from '@/hooks/useGlobalProvider'
import IBook from '@/interfaces/IBook'
import IChildren from '@/interfaces/IChildren'
import { createContext, Dispatch, SetStateAction } from 'react'

interface IGlobalContextData {
  showSearchInput: boolean
  toggleSearchInput: () => void
  closeSearchInput: () => void
  books: IBook
  isLoadingBooks: boolean
  setSearchInputValue: Dispatch<SetStateAction<string>>
  searchInputValue: string
}

const GlobalContext = createContext<IGlobalContextData>({} as IGlobalContextData)

export const GlobalProvider = (props: IChildren) => {
  const globalProvider = useGlobalProvider()
  return (
    <GlobalContext.Provider value={globalProvider}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
