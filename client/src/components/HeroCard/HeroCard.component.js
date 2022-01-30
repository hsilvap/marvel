import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { StyledHeroCard } from './HeroCard.styled'

export const HeroCard = ({name, id, thumbnail}) => {
    const onClick = () => {
        return <Navigate to={`/${id}`}/>
    }
    return <StyledHeroCard onClick={onClick}>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name}/>
        <span title={name}>{name}</span>
    </StyledHeroCard>
}