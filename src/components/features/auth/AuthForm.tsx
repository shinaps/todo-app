'use client'

import { BaseButton, BaseInput, BaseLink } from '@/components/base'
import { Center } from '@/components/util'
import { AuthFormProps } from '@/types'
import { authFormCredentialsSchema } from '@/zod'
import React, { FormEvent, useState } from 'react'

export const AuthForm: React.FC<AuthFormProps> = ({
  handleSubmit,
  formTitle,
  otherRouteTitle,
  otherRoute,
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
      <div className={`relative`}>
        <div
          className={`absolute z-[2] top-[calc(-25vh-44px)] left-[-160px] w-24 h-16 py-3 bg-blue text-white text-center rounded-lg`}
        >
          {formTitle}
        </div>
        <BaseLink href={otherRoute}>
          <div
            className={`absolute z-[1] top-[calc(-25vh-44px)] left-[-80px] w-24 h-16 py-3 bg-purple text-white text-center rounded-lg`}
          >
            {otherRouteTitle}
          </div>
        </BaseLink>
        <div
          className={`w-80 absolute z-10 top-[-25vh] left-[-160px] bg-white shadow-md px-8 py-12 rounded-md`}
        >
          <form onSubmit={onSubmit}>
            <div className={`flex flex-col gap-12`}>
              <BaseInput
                id={`auth-form__input_email`}
                label='Email'
                type='email'
                value={email}
                autoComplete={'email'}
                onChange={(e) => setEmail(e.target.value)}
              />
              <BaseInput
                id={`auth-form__input_password`}
                label='Password'
                type='password'
                value={password}
                autoComplete={'new-password'}
                onChange={(e) => setPassword(e.target.value)}
              />
              <BaseButton type='submit'>{formTitle}</BaseButton>
            </div>
          </form>
        </div>
      </div>
    </Center>
  )
}
