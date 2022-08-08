import { CardItem } from 'components/CardItem'
import { LoaderAnimated } from 'components/LoaderAnimated'
import { useData } from 'context/hooks/useData'
import React, { useEffect, useState } from 'react'
import * as S from './styles'

export const Cards = () => {
  const { cards } = useData()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const delay = 2000
    const timeAuout = setTimeout(() => {
      setLoading(false)
    }, delay)

    return () => clearTimeout(timeAuout)
  }, [])

  return (
    <S.Wrapper>
      {
        loading ? <LoaderAnimated /> :
          cards?.length > 0 && cards.map((card) => <CardItem card={card} key={card.code} />
          )

      }
    </S.Wrapper>
  )
}
