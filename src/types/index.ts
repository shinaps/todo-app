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
  formTitle: string
  otherRouteTitle: string
  otherRoute: string
}

export type { AuthFormProps, AuthFormPropsSafeParseResult }
