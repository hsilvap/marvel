import * as React from 'react'
import axios from 'axios'
import { NavBar } from '../NavBar/NavBar.component'
import { useParams } from 'react-router-dom';
import { StyledDetailHeader, StyledDetailWrapper, StyledInfoWrapper, StyledNewsWrapper, StyledSeriesContainer } from './Detail.styled';
import { NewComment } from '../NewComment/NewComment.component';
import { Comment } from '../Comment/Comment.component';

const FULFILLED = "fulfilled"
export const Detail = () => {
    let params = useParams();
    const [isLoading, setIsLoading] = React.useState(true);
    const [characterData, setCharacterData] = React.useState({});
    const [characterBlogEntries, setCharacterBlogEntries] = React.useState([]);
    const marvelData = axios.get(`https://gateway.marvel.com/v1/public/characters/${params.id}?apikey=39bcd6f842f465bb25a28d6ddca1532b`)
    const commentData = axios.get(`http://localhost:3001/v1/characters/${params.id}`)

    const reloadPosts = async () => {
        const { data } = await axios.get(`http://localhost:3001/v1/characters/${params.id}`)
        setCharacterBlogEntries(data)
    }
    const loadCharacterInfo = () => {
        Promise.allSettled([marvelData, commentData]).then(result => {
            if (result[0].status == FULFILLED) {
                setCharacterData(result[0].value.data.data.results[0])
            }
            if (result[1].status == FULFILLED) {
                setCharacterBlogEntries(result[1].value.data)
            }
            setIsLoading(false)
        })
    }

    React.useEffect(() => {
        loadCharacterInfo()
    }, [])

    if (isLoading)
        return <span>Loading...</span>

    return <>
        <NavBar />
        <StyledDetailHeader url={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}>
            <label>{characterData.name}</label>
        </StyledDetailHeader>
        <StyledDetailWrapper>
            <StyledInfoWrapper>
                <dl>
                    <dt>Description</dt>
                    <dd>{characterData.description || `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</dd>
                    <dt>Stories</dt>
                    <dd> <ul>
                        {characterData.stories.items.map((story) => <li key={story.resourceURI}>{story.name}</li>)}
                    </ul></dd>
                    <dt>Comments</dt>
                    <dd>
                        <NewComment characterId={characterData.id} reloadPosts={reloadPosts} />
                        {characterBlogEntries.map((entry) => <Comment key={entry.id} {...entry}/>)}
                    </dd>
                </dl>
            </StyledInfoWrapper>
            <StyledNewsWrapper>
                {/* Latest news has no API or endpoint?  */}
                Latest news
                <ul>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </li>
                </ul>

                Series
                <ul>
                    {characterData.series.items.map((serie) => <StyledSeriesContainer key={serie.resourceURI}>{serie.name}</StyledSeriesContainer>)}
                </ul>

            </StyledNewsWrapper>
        </StyledDetailWrapper>
    </>
}
