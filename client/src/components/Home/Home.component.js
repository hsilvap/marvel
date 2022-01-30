import * as React from 'react'
import axios from 'axios'
import { HeroCard } from '../HeroCard/HeroCard.component'
import { NavBar } from '../NavBar/NavBar.component'
import { StyledHome } from './Home.styled'

export const Home = () => {
    const [page, setPage] = React.useState(1);
    const [data, setData] = React.useState([]);
    const loadCharacters = async () => {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?limit=40&apikey=39bcd6f842f465bb25a28d6ddca1532b`)
        setData(response.data.data.results)
    }
    React.useEffect(() => {
        loadCharacters()
    }, []);
    
    return <> 
        <NavBar/>

        <h1>All heroes</h1>
        <StyledHome>
           {data.map((hero) => <HeroCard key={hero.id} {...hero}/>)}
        </StyledHome>
        </>
}
