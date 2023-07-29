import Link from 'next/link'
import { colors } from '@/config/style'
import { Box, k } from '@kuma-ui/core'
import React from 'react'
type BaseLinkProps = {
  href: string
  color?: string
  children: React.ReactNode
}

export const BaseLink: React.FC<BaseLinkProps> = ({
  href,
  color,
  children,
  ...props
}: BaseLinkProps) => {
  return (
    <Box display={'block'} width={'fit-content'}>
      <Link href={href} {...props}>
        <k.span color={color || colors.blue}>{children}</k.span>
      </Link>
    </Box>
  )
}
