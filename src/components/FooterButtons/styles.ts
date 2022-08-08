import { Button } from 'components/AddPlayer/styles'
import styled from 'styled-components'

export const Wrapper = styled.footer`
width: 80%;
margin-top: 30px;
display: flex;
justify-content: space-between;
position: relative;

img {
    position: absolute;
    width: 80px;
    top: -80px;
    right: 30px;
    z-index: 2;
    box-shadow: 2px 2px 8px 2px #000;
    cursor: pointer;
    transition: all ease-in 0.2s;
 &:hover {
    width: 90px;
    top: -100px;
    opacity: 0.9;
 }
    @media (max-width: 700px) {
    transform: rotate(90deg); 
    display: none;

    }
}
`

export const ButtonFooter = styled(Button)`

`
export const ButtonFooterBuy = styled(Button)`
display: none;
 @media (max-width: 700px) {
    display: block;
           
    }
`


