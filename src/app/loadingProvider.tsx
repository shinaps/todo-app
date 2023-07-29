'use client'

import React from 'react'
import { useRecoilValue } from 'recoil'
import { loadingState } from '@/state/loadingState'
import { Box } from '@kuma-ui/core'
import { colors } from '@/config/style'
import { Center } from '@/components/util/Center'
import { AnimatedWater } from '@/components/icons/AnimatedWater'

const LoadingProvider: React.FC = () => {
  const isLoading = useRecoilValue(loadingState)

  return (
    <>
      {isLoading && (
        <>
          <Box
            width={'100vw'}
            height={'100vh'}
            display={'block'}
            position={'fixed'}
            bgColor={colors.transparentWhite}
            zIndex={1000}
          >
            <Center>
              <AnimatedWater width={'3rem'} height={'3rem'} />
            </Center>
          </Box>
        </>
      )}
    </>
  )
}

export default LoadingProvider
