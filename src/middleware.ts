import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSupabaseServerSideClient } from '@/lib/supabase'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

const APP_URL = process.env.APP_URL
const { supabaseServerSideClient } = getSupabaseServerSideClient()

const AUTH_PATHS = [`/signin`, `/signup`]

async function isAuthenticated(
  cookie: RequestCookie | undefined,
): Promise<boolean> {
  if (!cookie) {
    return false
  }

  const user = await supabaseServerSideClient.auth.getUser(cookie.value)
  return Boolean(user.data?.user)
}

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get('access-token')
  const isAuthPath = AUTH_PATHS.includes(request.nextUrl.pathname)
  const userAuthenticated = await isAuthenticated(cookie)

  // 認証済みのユーザーに対するレスポンス処理
  if (userAuthenticated) {
    // 認証用パスに対するアクセスの場合、ホームページにリダイレクト
    // 認証用パス以外に対するアクセスの場合、そのまま処理を続行
    return isAuthPath
      ? NextResponse.redirect(`${APP_URL}/`)
      : NextResponse.next()
  } else {
    // 未認証のユーザーに対するレスポンス処理
    // 認証用パスに対するアクセスの場合、そのまま処理を続行
    // 認証用パス以外に対するアクセスの場合、サインインページにリダイレクト
    return isAuthPath
      ? NextResponse.next()
      : NextResponse.redirect(`${APP_URL}/signin`)
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
