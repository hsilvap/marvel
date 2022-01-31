import * as React from 'react'
import axios from 'axios'
import { HeroCard } from '../HeroCard/HeroCard.component'
import { NavBar } from '../NavBar/NavBar.component'
import { StyledHome, StyledHomeTitle, StyledPaginationButton, StyledPaginationWrapper } from './Home.styled'

export const Home = () => {
    const [page, setPage] = React.useState(1);
    const [data, setData] = React.useState([]);
    const [total, setTotal] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const apiKey = process.env.REACT_APP_MARVEL_KEY;

    const clickOnNext = () => setPage(page + 1)
    const clickOnPrev = () => setPage(page - 1)
    const getOffset = () => {
        if (page === 1) {
            return 0
        }
        return (page - 1) * 20
    }
    const loadCharacters = async () => {
        setLoading(true)
        const { data } = await axios.get(`https://gateway.marvel.com/v1/public/characters?limit=20&offset=${getOffset()}&apikey=${apiKey}`)
        setData(data.data.results)
        setLoading(false)
        if (total == null) {
            setTotal(data.data.total)
        }
    }
    React.useEffect(() => {
        loadCharacters()
    }, [page]);

   
    return <>
        <NavBar />
        <StyledHomeTitle>All heroes</StyledHomeTitle>
        {loading ? <div>Loading....</div> : <StyledHome>
            {data.map((hero) => <HeroCard key={hero.id} {...hero} />)}
        </StyledHome>}

        <StyledPaginationWrapper>
            <StyledPaginationButton disabled={page == 1} onClick={clickOnPrev}> &lt;- Prev</StyledPaginationButton>
            <StyledPaginationButton onClick={clickOnNext}>Next -&gt; </StyledPaginationButton>
        </StyledPaginationWrapper>
    </>
}
