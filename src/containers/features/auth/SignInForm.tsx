'use client'

import React from 'react'
import routes from '@/config/routes'
import { colors } from '@/config/style'
import { useSetRecoilState } from 'recoil'
import { loadingState } from '@/state/loadingState'
import { AuthForm } from '@/components/features/auth/AuthForm'
import { addMessage } from '@/state/messagesState'
import { AuthFormPropsSafeParseResult } from '@/types'
import { post } from '@/lib/utils'
import { SignInResponse } from '@/app/api/auth/sign-in/route'
import apiRoutes from '@/config/apiRoutes'

export const SignInForm: React.FC = () => {
  const setMessage = useSetRecoilState(addMessage)
  const setLoading = useSetRecoilState(loadingState)

  const handleSubmit = async (
    authFormPropsSafeParseResult: AuthFormPropsSafeParseResult,
  ) => {
    if (!authFormPropsSafeParseResult.success) {
      setMessage({
        type: 'error',
        message: '入力内容に誤りがあります。',
      })
      return
    }
    setLoading(true)
    const signInResponse = await post<SignInResponse>(
      apiRoutes.signIn,
      authFormPropsSafeParseResult.data,
    )
    setLoading(false)

    console.log('signInResponse', signInResponse)

    if (signInResponse.status != 200) {
      setMessage({
        type: 'error',
        message: 'ログインに失敗しました。',
      })
      return
    }

    setMessage({
      type: 'success',
      message: 'ログインに成功しました。',
    })
  }

  return (
    <AuthForm
      handleSubmit={handleSubmit}
      color={colors.purple}
      formTitle='Sign In'
      otherRouteTitle='Sign Up'
      otherRoute={routes.signUp}
      otherRouteColor={colors.blue}
    />
  )
}
