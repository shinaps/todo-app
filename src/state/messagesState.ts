import { BaseMessageProps } from '@/components/base/BaseMessage'
import { atom, DefaultValue, selector } from 'recoil'

type MessagesState = BaseMessageProps[]

const messagesState = atom<MessagesState>({
  key: 'MessagesState',
  default: [],
})

const messageIdState = atom<number>({
  key: 'MessageIdState',
  default: 0,
})

type NewMessage = Omit<BaseMessageProps, 'id' | 'isOpen'>

const addMessage = selector<NewMessage>({
  key: 'AddMessage',
  get: () => {
    throw new Error('Attempt to get addMessage. Use set instead.')
  },
  set: ({ set, get }, newValue: NewMessage | DefaultValue) => {
    if (!(newValue instanceof DefaultValue)) {
      const currentId = get(messageIdState)
      const messages = get(messagesState)

      set(messagesState, [
        ...messages,
        {
          id: currentId,
          ...newValue,
          isOpen: true,
        },
      ])
      set(messageIdState, currentId + 1)
    }
  },
})

export { messagesState, addMessage }
