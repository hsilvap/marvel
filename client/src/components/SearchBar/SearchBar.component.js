import * as React from 'react'
import { StyledSearchBar } from './SearchBar.styled'

export const SearchBar = () => {
    const handleOnChange = () => {
    }
    return <StyledSearchBar placeholder='Search' onChange={handleOnChange}/>
}