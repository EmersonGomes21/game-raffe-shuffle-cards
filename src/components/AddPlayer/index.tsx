import { Formik } from 'formik';
import { useData } from 'hooks/useData';
import React from 'react'
import * as S from './styles'

export const AddPlayer = () => {
  const { setPlayerName } = useData()

  return (
    <S.Wrapper>
      <S.Title>Entre com seu nick ganhador! </S.Title>
      <Formik
        initialValues={{ playerName: '', }}
        onSubmit={(values) => setPlayerName(values.playerName)}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <S.Input
              type="text"
              name="playerName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.playerName}
              required
            />
            
            <S.Button type='submit' >
              Ver cartas
            </S.Button>
          </form>
        )}
      </Formik>
    </S.Wrapper>
  )
}
