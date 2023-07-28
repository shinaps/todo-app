import { atom } from 'recoil'

type LoadingState = boolean

const loadingState = atom<LoadingState>({
  key: 'LoadingState',
  default: false,
})

export { loadingState }
