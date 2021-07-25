import React, { useState } from 'react'
import { STextField } from './styles'

export default function Header({ children }) {
  const [searchInputValue, setSearchInputValue] = useState('')

  const handleSearchInput = (e) => {
    setSearchInputValue(e.target.value)
  }

  return (
    <header>
      <STextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={searchInputValue}
        onChange={handleSearchInput}
      />
    </header>
  )
}
