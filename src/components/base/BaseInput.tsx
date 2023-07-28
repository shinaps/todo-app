import React, { InputHTMLAttributes } from 'react'
import { Input, k, VStack } from '@kuma-ui/core'
import { colors, robotoMonoNormal } from '@/config/style'

type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label?: string
  color?: string
}

export const BaseInput: React.FC<BaseInputProps> = ({
  id,
  label,
  color,
  ...props
}: BaseInputProps) => {
  return (
    <VStack gap={4}>
      {label && (
        <k.label color={color || colors.blue} htmlFor={id}>
          {label}
        </k.label>
      )}
      <Input
        id={id}
        px={4}
        py={8}
        color={colors.gray}
        border={'none'}
        borderBottom={`1.5px solid ${colors.gray}`}
        letterSpacing={props.type === 'password' ? 6 : 0}
        className={props.type === 'email' ? robotoMonoNormal.className : ''}
        {...props}
      />
    </VStack>
  )
}
