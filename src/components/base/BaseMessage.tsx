import { Check, Close, Info } from '@/components/icons'
import { messagesState } from '@/state/messagesState'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

type MessageType = 'error' | 'warning' | 'info' | 'success'

export type BaseMessageProps = {
  id: number
  type: MessageType
  message: string
  isOpen: boolean
}

export const BaseMessage: React.FC<BaseMessageProps> = ({
  id,
  type,
  message,
  isOpen,
}) => {
  const [_, setMessages] = useRecoilState(messagesState)

  const closeMessage = (id: number) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, isOpen: false } : msg,
      ),
    )
  }

  const removeMessage = (id: number) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      closeMessage(id)
    }, 3000)

    return () => clearTimeout(timer)
  }, [id])

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        removeMessage(id)
      }, 400)

      return () => clearTimeout(timer)
    }
  }, [isOpen, id])

  return (
    <div
      className={`animated-div`}
      style={{ animationName: isOpen ? 'slide-in' : 'slide-out' }}
    >
      {type === 'error' && (
        <div
          className={`flex w-80 leading-[4rem] text-center bg-red text-white rounded-md items-center fixed top-[1rem] z-[999] shadow-md`}
        >
          <div className={`flex p-[0.8rem] items-center`}>
            <Close width={'2rem'} height={'2rem'} />
          </div>
          <p className={`text-left grow`}>{message}</p>
          <div
            className={`flex absolute top-0 right-0 p-[0.2rem] items-center`}
            onClick={() => closeMessage(id)}
          >
            <Close width={'1.5rem'} height={'1.5rem'} />
          </div>
        </div>
      )}
      {type === 'info' && (
        <div
          className={`flex w-80 leading-[4rem] text-center bg-gray text-white rounded-md items-center fixed top-[1rem] z-[999] shadow-md`}
        >
          <div className={`flex p-[0.8rem] items-center`}>
            <Info width={'2rem'} height={'2rem'} />
          </div>
          <p className={`text-left grow`}>{message}</p>
          <div
            className={`flex absolute top-0 right-0 p-[0.2rem] items-center`}
            onClick={() => closeMessage(id)}
          >
            <Close width={'1.5rem'} height={'1.5rem'} />
          </div>
        </div>
      )}
      {type === 'warning' && (
        <div
          className={`flex w-80 leading-[4rem] text-center bg-yellow text-white rounded-md items-center fixed top-[1rem] z-[999] shadow-md`}
        >
          <div className={`flex p-[0.8rem] items-center`}>
            <Info width={'2rem'} height={'2rem'} />
          </div>
          <p className={`text-left grow`}>{message}</p>
          <div
            className={`flex absolute top-0 right-0 p-[0.2rem] items-center`}
            onClick={() => closeMessage(id)}
          >
            <Close width={'1.5rem'} height={'1.5rem'} />
          </div>
        </div>
      )}
      {type === 'success' && (
        <div
          className={`flex w-80 leading-[4rem] text-center bg-blue text-white rounded-md items-center fixed top-[1rem] z-[999] shadow-md`}
        >
          <div className={`flex p-[0.8rem] items-center`}>
            <Check width={'2rem'} height={'2rem'} />
          </div>
          <p className={`text-left grow`}>{message}</p>
          <div
            className={`flex absolute top-0 right-0 p-[0.2rem] items-center`}
            onClick={() => closeMessage(id)}
          >
            <Close width={'1.5rem'} height={'1.5rem'} />
          </div>
        </div>
      )}
    </div>
  )
}
