import React from 'react'
import Lottie from 'lottie-react-web'
import aimationCard from '../../../public/img/2821-ace-of-cards.json'
export const LoaderAnimated = () => (
  <Lottie
    options={{
      animationData: aimationCard
    }}
  />
)
