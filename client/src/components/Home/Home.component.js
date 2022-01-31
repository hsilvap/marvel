import * as React from 'react'
import axios from 'axios'
import { HeroCard } from '../HeroCard/HeroCard.component'
import { NavBar } from '../NavBar/NavBar.component'
import { StyledHome, StyledHomeTitle } from './Home.styled'

export const Home = () => {
    const [page, setPage] = React.useState(1);
    const [data, setData] = React.useState([]);
    const [total, setTotal] = React.useState(null);
    const apiKey = process.env.REACT_APP_MARVEL_KEY;
    
    const loadCharacters = async () => {
        const { data } = await axios.get(`https://gateway.marvel.com/v1/public/characters?limit=20&offset=0&apikey=${apiKey}`)
        setData(data.data.results)
        if (total == null) {
            setTotal(data.data.total)
        }
    }
    React.useEffect(() => {
        loadCharacters()
    }, []);

    return <>
        <NavBar />
        <StyledHomeTitle>All heroes</StyledHomeTitle>
        <StyledHome>
            {data.map((hero) => <HeroCard key={hero.id} {...hero} />)}
        </StyledHome>
    </>
}
