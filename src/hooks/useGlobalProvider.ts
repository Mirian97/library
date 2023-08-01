'use client'
import { useState } from 'react'

const useGlobalContextProvider = () => {
  const [showSearchInput, setShowSearchInput] = useState(false)
  const toggleSearchInput = () => setShowSearchInput(!showSearchInput)

  return {
    showSearchInput,
    toggleSearchInput
  }
}

export default useGlobalContextProvider
