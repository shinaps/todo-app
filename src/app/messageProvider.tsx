'use client'

import React from 'react'
import { useRecoilValue } from 'recoil'
import { BaseMessage } from '@/components/base/BaseMessage'
import { messagesState } from '@/state/messagesState'

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
