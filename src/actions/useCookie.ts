'use server'
import { cookies } from 'next/headers'

export const setCookie = async (
  name: string,
  value: string,
  expires: number = 1000 * 60 * 60 * 24,
) => {
  return cookies().set({
    name: name,
    value: value,
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    expires: new Date(Date.now() + expires),
    path: '/',
  })
}

export const deleteCookie = async (name: string) => {
  return cookies().set({
    name: name,
    value: '',
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  })
}

export const getCookie = async (name: string) => {
  return cookies().get(name)?.value
}
