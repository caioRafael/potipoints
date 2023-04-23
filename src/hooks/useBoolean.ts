import { useState } from 'react'

type Response = [
  boolean,
  {
    setTrue: () => void
    setFalse: () => void
    toggle: () => void
  },
]

export const useBoolean = (initialValue: boolean): Response => {
  const [boolean, setBoolean] = useState<boolean>(initialValue)

  const setTrue = () => setBoolean(true)
  const setFalse = () => setBoolean(false)
  const toggle = () => setBoolean((value) => !value)

  const actions = { setTrue, setFalse, toggle }
  return [boolean, actions]
}
