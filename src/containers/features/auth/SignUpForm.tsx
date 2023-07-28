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
import { SignUpResponse } from '@/app/api/auth/sign-up/route'
import apiRoutes from '@/config/apiRoutes'

export const SignUpForm: React.FC = () => {
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
    const signUpResponse = await post<SignUpResponse>(
      apiRoutes.signUp,
      authFormPropsSafeParseResult.data,
    )
    setLoading(false)

    console.log('signUpResponse', signUpResponse)

    if (signUpResponse.status != 200) {
      setMessage({
        type: 'error',
        message: '登録に失敗しました。',
      })
      return
    }

    setMessage({
      type: 'success',
      message: '登録に成功しました。',
    })
  }

  return (
    <AuthForm
      handleSubmit={handleSubmit}
      color={colors.blue}
      formTitle='Sign Up'
      otherRouteTitle='Sign In'
      otherRoute={routes.signIn}
      otherRouteColor={colors.purple}
    />
  )
}
