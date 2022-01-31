import * as React from 'react'
import { StyledHeroCard } from './HeroCard.styled'
import { useNavigate } from "react-router-dom";

export const HeroCard = ({name, id, thumbnail}) => {
    let navigate = useNavigate();
    const onClick = () => (
        navigate(`/${id}`)
    )
    return <StyledHeroCard onClick={onClick}>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name}/>
        <span title={name}>{name}</span>
    </StyledHeroCard>
}