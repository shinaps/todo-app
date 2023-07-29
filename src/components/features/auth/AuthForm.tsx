'use client'

import React, { FormEvent, useState } from 'react'
import { Box, VStack } from '@kuma-ui/core'
import { colors, width } from '@/config/style'
import { Center } from '@/components/util/Center'
import { BaseLink } from '@/components/base/BaseLink'
import { BaseInput } from '@/components/base/BaseInput'
import { BaseButton } from '@/components/base/BaseButton'
import { AuthFormProps } from '@/types'
import { authFormCredentialsSchema } from '@/zod'

export const AuthForm: React.FC<AuthFormProps> = ({
  handleSubmit,
  color,
  formTitle,
  otherRouteTitle,
  otherRoute,
  otherRouteColor,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const authFormPropsSafeParseResult = authFormCredentialsSchema.safeParse({
      email,
      password,
    })
    handleSubmit(authFormPropsSafeParseResult)
  }

  return (
    <Center>
      <Box position={'relative'}>
        <Box
          position={'absolute'}
          zIndex={2}
          top={'calc(-25vh - 44px)'}
          left={`-${width.containerInt / 2}px`}
          width={'92px'}
          height={'60px'}
          py={12}
          bgColor={color}
          color={colors.white}
          textAlign={'center'}
          borderRadius={8}
        >
          {formTitle}
        </Box>
        <BaseLink href={otherRoute} color={colors.white}>
          <Box
            position={'absolute'}
            zIndex={1}
            top={'calc(-25vh - 44px)'}
            left={`calc(-${width.containerInt / 2}px + 80px)`}
            width={'92px'}
            height={'60px'}
            py={12}
            bgColor={otherRouteColor}
            color={colors.white}
            textAlign={'center'}
            borderRadius={8}
          >
            {otherRouteTitle}
          </Box>
        </BaseLink>
        <Box
          width={width.container}
          position={'absolute'}
          top={'-25vh'}
          left={`-${width.containerInt / 2}px`}
          zIndex={10}
          bgColor={colors.white}
          boxShadow={`0px 2px 10px -2px ${colors.gray}`}
          px={20}
          py={32}
          borderRadius={16}
        >
          <VStack gap={24}>
            <form onSubmit={onSubmit}>
              <VStack gap={48}>
                <BaseInput
                  id={`auth-form__input_email`}
                  label='Email'
                  type='email'
                  value={email}
                  autoComplete={'email'}
                  color={color}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <BaseInput
                  id={`auth-form__input_password`}
                  label='Password'
                  type='password'
                  value={password}
                  autoComplete={'new-password'}
                  color={color}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <BaseButton type='submit' color={color}>
                  {formTitle}
                </BaseButton>
              </VStack>
            </form>
          </VStack>
        </Box>
      </Box>
    </Center>
  )
}
