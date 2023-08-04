'use client'
import useGlobalProvider from '@/hooks/useGlobalProvider'
import IChildren from '@/interfaces/IChildren'
import { ChangeEvent, createContext } from 'react'

interface IGlobalContextData {
  searchInputValue: string
  onChangeSearchInput: (e: ChangeEvent<HTMLInputElement>) => void
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
