'use client'

import { Message } from '@/components/UI'
import { messagesState } from '@/state/messagesState'
import React from 'react'
import { useRecoilValue } from 'recoil'

const MessageProvider: React.FC = () => {
  const messages = useRecoilValue(messagesState)

  return (
    <>
      {messages.map((message) => (
        <Message key={message.id} {...message}></Message>
      ))}
    </>
  )
}

export default MessageProvider
