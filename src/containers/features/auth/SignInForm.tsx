'use client'

import { SignInResponse } from '@/app/api/auth/sign-in/route'
import { AuthForm } from '@/components/features/auth/AuthForm'
import apiRoutes from '@/config/apiRoutes'
import routes from '@/config/routes'
import { post } from '@/lib/utils'
import { loadingState } from '@/state/loadingState'
import { addMessage } from '@/state/messagesState'
import { AuthFormPropsSafeParseResult } from '@/types'
import React from 'react'
import { useSetRecoilState } from 'recoil'

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
      formTitle='Sign In'
      otherRouteTitle='Sign Up'
      otherRoute={routes.signUp}
    />
  )
}
