import { Roboto, Roboto_Mono } from 'next/font/google'

export const robotoNormal = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto-normal',
  display: 'swap',
})

export const robotoMonoNormal = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const robotoBold = Roboto({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})
