import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { StyledNavBar } from './NavBar.styled'
import { SearchBar } from '../SearchBar/SearchBar.component'
import logo from '../../assets/logo.png' 

export const NavBar = () => {
    const onClickLogo = () => {
        <Navigate to="/"/>
    }
    return <StyledNavBar>
        <img src={logo} alt='logo' onClick={onClickLogo} />
        <SearchBar/>
    </StyledNavBar>
}