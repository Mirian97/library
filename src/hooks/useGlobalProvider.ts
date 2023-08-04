'use client'
import { ChangeEvent, useState } from 'react'

const useGlobalContextProvider = () => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchInputValue(e.target.value)

  return {
    searchInputValue,
    onChangeSearchInput
  }
}

export default useGlobalContextProvider
