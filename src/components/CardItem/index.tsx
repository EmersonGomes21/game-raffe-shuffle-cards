import React from 'react'
import { ICard } from 'types'
import { randomValue } from 'utils'
interface ICardItem {
  card: ICard
}
import * as S from './styles'

export const CardItem = ({ card }: ICardItem) => {

  const cardName = `${card.value} ${card.suit}`
  return (

    <S.Wrapper>
      <S.NameCard> {cardName} </S.NameCard>
      <S.Image src={card.image} title={cardName} />
      <S.NameCard>{card?.point} Points </S.NameCard>

      
    </S.Wrapper>
  )
}

