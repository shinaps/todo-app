import React from 'react'
import { Grid } from '@kuma-ui/core'

type CenterProps = {
  children: React.ReactNode
}

export const Center: React.FC<CenterProps> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <Grid height={'100vh'} alignItems={'center'} justifyItems={'center'}>
      {children}
    </Grid>
  )
}
