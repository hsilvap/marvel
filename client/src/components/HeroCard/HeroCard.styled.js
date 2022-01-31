import styled from '@emotion/styled'

export const StyledHeroCard = styled.div`
   display: flex;
   flex-flow:column;
   cursor:pointer;
   width: 200px;
   place-self:center;

   > img {
        flex-shrink:0;
        height: 200px;
        width: 200px;
   } 
   > span {
       text-align:center;
       background-color: grey;
       color: white;
       flex-shrink:0;
       font-size:large;
       padding: 10px 10px;
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
   }
`