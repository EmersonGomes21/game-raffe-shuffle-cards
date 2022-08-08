import { Button } from 'components/AddPlayer/styles'
import { useData } from 'hooks/useData'
import React from 'react'
import * as S from './styles'

export const FooterButtons = () => {
  const { buyCard, shuffleCards, remnantCards } = useData()

  return (
    <S.Wrapper>
      <S.ButtonFooter onClick={shuffleCards}>Shuffle</S.ButtonFooter>
      <S.ButtonFooterBuy type='button' onClick={buyCard}>Buy</S.ButtonFooterBuy>
     
          <img src='/img/verso-baralho.png' onClick={buyCard} title='Buy'/>
        
   
    </S.Wrapper>
  )
}
