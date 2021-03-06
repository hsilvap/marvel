import styled from '@emotion/styled'

export const StyledDetailHeader = styled.div`
    position: relative;
    height:305px;
    width: 100%; /* fall back */
    width: 100vw;
    background-repeat: no-repeat;  
    background-position: 0% 0%;
    background-size: 100% 100%;
    background-image:url(${props => props.url});
    > label {
        width: 350px;
        text-align: center;
        background-color: grey;
        color: white;
        font-size: 40px;
        padding: 10px 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        position: absolute;
        top: 238px;
        left: 100px;
    }
`

export const StyledDetailWrapper = styled.section`
    display: flex;
    flex-flow:row;
    font-size: 24px;
    @media (max-width: 425px) {
        flex-flow:column;
    }

`
export const StyledInfoWrapper = styled.section`
    display: flex;
    flex: 2;
    flex-flow:column;
    > dl {
        margin: 0 100px;
        
        dt{
            font-weight:bold;
            margin-top:24px;
        }
        dd{
            margin-top:24px;
            margin-left: 0px;
        }
    }
`
export const StyledNewsWrapper = styled.section`
    display: flex;
    flex: 1;
    flex-flow:column;
    background-color:lightgrey;
    font-size: 24px;
    padding: 24px 24px;
`
export const StyledSeriesContainer = styled.li`
list-style: none;
background-color: white;
padding-top: 40px;
padding-left: 6px;
border-radius: 3px;
display: block;
width: 60%;
font-size: 12px;
margin: 16px 0px;
`