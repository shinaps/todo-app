import { NextResponse } from 'next/server'

type ApiResponse<T> = {
  status: number
  data: NextResponse<T>
}

type Post = <T = any>(url: RequestInfo, data: any) => Promise<ApiResponse<T>>

export const post: Post = async <T = any>(
  url: RequestInfo,
  data: any,
): Promise<ApiResponse<T>> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const responseData = (await response.json()) as NextResponse<T>

  return {
    status: response.status,
    data: responseData,
  }
}

export const sleep = (milliSeconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliSeconds))
}
