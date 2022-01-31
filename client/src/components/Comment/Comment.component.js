import * as React from 'react'
import { StyledComment } from './Comment.styled'

export const Comment = ({ author, post,date }) => {
    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
    return <StyledComment>
        <h5>{author}</h5>
        <p>{post}</p>
        <small>{new Date(date).toLocaleDateString('en-EN', options)} {new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
    </StyledComment>
}