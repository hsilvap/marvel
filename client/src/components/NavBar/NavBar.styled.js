import styled from '@emotion/styled'

export const StyledNavBar = styled.nav`
    display: flex;
    background-color: lightgrey;
    flex-flow: row;
    height: 10vh;
    justify-content: space-between;
    align-items:center;
    
    > img {
        max-height: 9vh;
        max-width: 200px;
        margin-left: 40px;
        cursor:pointer;
    }
`
