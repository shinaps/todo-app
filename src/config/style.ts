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

export const colors = {
  blue: '#6c88fa',
  green: '#71ec88',
  white: '#FFFFFF',
  transparentWhite: 'rgba(255, 255, 255, 0.7)',
  gray: '#ADB9C6',
  purple: '#9a74f3',
  red: '#fa7085',
  yellow: '#efc56a',
}

export const width = {
  container: '320px',
  containerInt: 320,
}
