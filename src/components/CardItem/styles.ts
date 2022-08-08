import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: center;
text-align: center;
flex-direction: column;
margin-bottom: 20px;
`;

export const NameCard = styled.h3`

`;

export const Image = styled.img<ImgHTMLAttributes<any>>`
 width:  12rem;
 margin: 7px;
 transition: all ease-in 0.2s;
 &:hover {
 width:  13rem;
    opacity: 0.9;
 }
`;


