import { AuthFormCredentials } from '@/zod'

type AuthFormPropsSafeParseResultSuccess = {
  success: true
  data: AuthFormCredentials
}

type AuthFormPropsSafeParseResultFailure = {
  success: false
  data?: null
}

type AuthFormPropsSafeParseResult =
  | AuthFormPropsSafeParseResultSuccess
  | AuthFormPropsSafeParseResultFailure

type AuthFormProps = {
  handleSubmit: ({ success, data }: AuthFormPropsSafeParseResult) => void
  color: string
  formTitle: string
  otherRouteTitle: string
  otherRoute: string
  otherRouteColor: string
}

export type { AuthFormProps, AuthFormPropsSafeParseResult }
