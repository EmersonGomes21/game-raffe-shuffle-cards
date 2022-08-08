import { AddPlayer } from 'components/AddPlayer'
import { Cards } from 'components/Cards'
import { FooterButtons } from 'components/FooterButtons'
import { Header } from 'components/Header'
import { useData } from 'hooks/useData'
import React from 'react'

import * as S from './styles'

const MainLayout = () => {
  const { playerName } = useData()
  return (
    <S.Wrapper>
      <Header />

      {!playerName
        ? <AddPlayer />
        : (
          <>
            <Cards />
            <FooterButtons />
          </>
        )
      }

    </S.Wrapper>
  )
}

export { MainLayout }
