import { NextRequest, NextResponse } from 'next/server'
import { authFormCredentialsSchema } from '@/zod'
import { getSupabaseServerSideClient } from '@/lib/supabase'
import { setCookie } from '@/actions/useCookie'
import { Session, User } from '@supabase/gotrue-js'

const { supabaseServerSideClient } = getSupabaseServerSideClient()

export type SignInResponse = {
  user: User | null
  session: Session | null
  error: string | null
}

export async function POST(
  req: NextRequest,
): Promise<NextResponse<SignInResponse>> {
  const requestJson = await req.json()
  const credentials = authFormCredentialsSchema.parse(requestJson)

  const {
    data: { user, session },
    error,
  } = await supabaseServerSideClient.auth.signInWithPassword(credentials)

  if (error) {
    console.error(error)
    return NextResponse.json(
      {
        user: null,
        session: null,
        error: error.message,
      },
      { status: error.status },
    )
  }

  if (user && session) {
    await setCookie('access-token', session.access_token)
    return NextResponse.json({ user, session, error: null }, { status: 200 })
  }

  return NextResponse.json(
    {
      user: null,
      session: null,
      error: 'Unexpected error has occurred in signIn',
    },
    { status: 500 },
  )
}
