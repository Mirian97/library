'use client'
import useGlobalProvider from '@/hooks/useGlobalProvider'
import IBook from '@/interfaces/IBook'
import IChildren from '@/interfaces/IChildren'
import { createContext } from 'react'

interface IGlobalContextData {
  showSearchInput: boolean
  toggleSearchInput: () => void
  books: IBook
  isLoadingBooks: boolean
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
