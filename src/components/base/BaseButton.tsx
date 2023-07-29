import React, { ButtonHTMLAttributes } from 'react'
import { Button } from '@kuma-ui/core'
import { colors } from '@/config/style'

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color?: string
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  color,
  ...props
}: BaseButtonProps) => (
  <Button
    bgColor={color || colors.blue}
    color={colors.white}
    height={'2.5rem'}
    border={'none'}
    borderRadius={5}
    {...props}
  >
    {children}
  </Button>
)
