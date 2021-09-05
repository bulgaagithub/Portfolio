import React from 'react'
// Components
import { Box } from '@chakra-ui/layout'
import Lottie from 'react-lottie'
import discovery from '../../public/lottie/discovery.json'

const DisplayLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: discovery,
  }
  return (
    <Box>
      <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
    </Box>
  )
}

export default DisplayLottie
