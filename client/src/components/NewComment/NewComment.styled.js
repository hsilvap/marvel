import styled from '@emotion/styled'

export const StyledNewComment = styled.form`
    display: flex;
    flex-flow:column;
    > input{
        display: inline-block;
        width: 60%;
        height: 30px;
        margin: 12px 0;
    }
    > textarea{
        height:100px;
        margin: 12px 0;
    }
    > button {
       width:30%;
       margin: 12px 0;
    }
`

export const StyledError = styled.span`
    color: red;
    font-size:12px;
`