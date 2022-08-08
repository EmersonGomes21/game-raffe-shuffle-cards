import { CardItem } from 'components/CardItem'
import { FooterButtons } from 'components/FooterButtons'
import { useData } from 'hooks/useData'
import React from 'react'
import * as S from './styles'

export const Cards = () => {
  const { cards } = useData()
  return (
    <S.Wrapper>
      {
        cards?.length > 0 && cards.map((card) => <CardItem card={card} key={card.code} />
        )
         
      }
    </S.Wrapper>
  )
}
