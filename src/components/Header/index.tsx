import { Button } from 'components/AddPlayer/styles'
import { useData } from 'hooks/useData'
import React from 'react'
import * as S from './styles'

export const Header = () => {
  const { logout, playerName , remnantCards } = useData()

  return (
    <S.Wrapper>
      {playerName && (
        <>
          <S.Logout onClick={logout}>Logout</S.Logout>
          <S.RemnantCards> Remaining cards: {remnantCards} </S.RemnantCards>
        </>
      )}
      <S.RemnantCards> {playerName} </S.RemnantCards>
      {!playerName && <img src='http://deckofcardsapi.com/static/img/blackjack2.png' />}
    </S.Wrapper>
  )
}
