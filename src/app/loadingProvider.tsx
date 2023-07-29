'use client'

import React from 'react'
import { useRecoilValue } from 'recoil'
import { loadingState } from '@/state/loadingState'
import { colors } from '@/config/style'
import { Center } from '@/components/util/Center'
import { AnimatedWater } from '@/components/icons/AnimatedWater'

const LoadingProvider: React.FC = () => {
  const isLoading = useRecoilValue(loadingState)

  return (
    <>
      {isLoading && (
        <>
          <div
            className={`w-screen h-screen block fixed bg-${colors.transparentWhite} z-10`}
          >
            <Center>
              <AnimatedWater width={'3rem'} height={'3rem'} />
            </Center>
          </div>
        </>
      )}
    </>
  )
}

export default LoadingProvider
