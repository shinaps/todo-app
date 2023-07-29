'use client'

import { BaseMessage } from '@/components/base'
import { messagesState } from '@/state/messagesState'
import React from 'react'
import { useRecoilValue } from 'recoil'

const MessageProvider: React.FC = () => {
  const messages = useRecoilValue(messagesState)

  return (
    <>
      {messages.map((message) => (
        <BaseMessage key={message.id} {...message}></BaseMessage>
      ))}
    </>
  )
}

export default MessageProvider
