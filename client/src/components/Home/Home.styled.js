import styled from '@emotion/styled'

export const StyledHome = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items:center;
    grid-gap:4em;
    padding:50px 50px;
    @media (max-width: 425px) {
        grid-template-columns: 1fr;
    }
`

export const StyledHomeTitle = styled.h1`
    text-align:center;
`
