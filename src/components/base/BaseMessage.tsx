import React, { useEffect } from 'react'
import { Flex, styled, Text } from '@kuma-ui/core'
import { colors, width } from '@/config/style'
import { useRecoilState } from 'recoil'
import { Close } from '@/components/icons/Close'
import { Info } from '@/components/icons/Info'
import { Check } from '@/components/icons/Check'
import { messagesState } from '@/state/messagesState'

type MessageType = 'error' | 'warning' | 'info' | 'success'

export type BaseMessageProps = {
  id: number
  type: MessageType
  message: string
  isOpen: boolean
}

const color = {
  error: colors.red,
  warning: colors.yellow,
  info: colors.gray,
  success: colors.blue,
}

const AnimatedDiv = styled('div')`
  position: fixed;
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  transform-origin: center;
  @keyframes slide-in {
    0% {
      right: 0;
    }
    30% {
      right: calc(50vw + 170px);
    }
    80% {
      right: calc(50vw + 160px);
    }
    100% {
      right: calc(50vw + 160px);
    }
  }
  @keyframes slide-out {
    0% {
      right: calc(50vw + 160px);
    }
    20% {
      right: calc(50vw + 170px);
    }
    70% {
      right: 0;
    }
    100% {
      right: 0;
    }
  }
`

export const BaseMessage: React.FC<BaseMessageProps> = ({
  id,
  type,
  message,
  isOpen,
}) => {
  const [messages, setMessages] = useRecoilState(messagesState)

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
    <AnimatedDiv style={{ animationName: isOpen ? 'slide-in' : 'slide-out' }}>
      <Flex
        width={width.container}
        lineHeight={'4rem'}
        textAlign={'center'}
        bgColor={color[type]}
        color={colors.white}
        borderRadius={5}
        alignItems={'center'}
        position={'fixed'}
        top={'1rem'}
        zIndex={999}
        boxShadow={`0px 2px 10px -2px ${colors.gray}`}
      >
        {type === 'error' && (
          <Flex p={'0.8rem'} alignItems={'center'}>
            <Close width={'2rem'} height={'2rem'} />
          </Flex>
        )}
        {type === 'warning' && (
          <Flex p={'0.8rem'} alignItems={'center'}>
            <Info width={'2rem'} height={'2rem'} />
          </Flex>
        )}
        {type === 'info' && (
          <Flex p={'0.8rem'} alignItems={'center'}>
            <Info width={'2rem'} height={'2rem'} />
          </Flex>
        )}
        {type === 'success' && (
          <Flex p={'0.8rem'} alignItems={'center'}>
            <Check width={'2rem'} height={'2rem'} />
          </Flex>
        )}
        <Text textAlign={'left'} flexGrow={1} wordBreak={'break-word'}>
          {message}
        </Text>
        <Flex
          position={'absolute'}
          top={'0px'}
          right={'0px'}
          p={'0.2rem'}
          alignItems={'center'}
          onClick={() => closeMessage(id)}
        >
          <Close width={'1.5rem'} height={'1.5rem'} />
        </Flex>
      </Flex>
    </AnimatedDiv>
  )
}
