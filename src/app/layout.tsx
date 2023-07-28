import './globals.css'
import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { VStack } from '@kuma-ui/core'
import React from 'react'
import { robotoNormal } from '@/config/style'
import RecoilProvider from '@/app/recoilProvider'
import MessageProvider from '@/app/messageProvider'
import LoadingProvider from '@/app/loadingProvider'

export const metadata = {
  title: 'kuma-swr-todo-app',
  description: 'kuma-swr-todo-app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja' className={`${robotoNormal.variable}`}>
      <body>
        <KumaRegistry>
          <RecoilProvider>
            <LoadingProvider />
            <VStack maxWidth={'384px'} mx={'auto'} alignItems={'center'}>
              <MessageProvider />
              {children}
            </VStack>
          </RecoilProvider>
        </KumaRegistry>
      </body>
    </html>
  )
}
