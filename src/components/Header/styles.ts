import { Button } from 'components/AddPlayer/styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
    width: 100%;
    height: 100px;
    position: absolute;
    right: 0;
    top: 0;
    padding-top: 15px;
    justify-content: right;
h1 {
    margin-right: 30px;
    @media (max-width: 700px) {
        margin-right: 15px;
           
    } 
   
} 
    img { 
    position: absolute;    
     width: 200px;
     right: 0;
     top: 0;
     @media (max-width: 700px) {
        width: 130px;
           
    } 
    }
`
export const Logout = styled(Button)`
    position: absolute;
    left: 10px;
`
export const RemnantCards = styled.h1`

`


