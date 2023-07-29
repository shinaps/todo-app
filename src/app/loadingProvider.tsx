'use client'

import { AnimatedWater } from '@/components/icons'
import { Center } from '@/components/util'
import { loadingState } from '@/state/loadingState'
import React from 'react'
import { useRecoilValue } from 'recoil'

const LoadingProvider: React.FC = () => {
  const isLoading = useRecoilValue(loadingState)

  return (
    <>
      {isLoading && (
        <>
          <div
            className={`w-screen h-screen block fixed bg-transparentWhite z-[1000]`}
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
