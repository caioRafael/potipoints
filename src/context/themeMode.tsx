import { ReactNode, createContext } from 'react'
import { usePersistedState } from '../hooks/usePersistedState'

type ThemeModeType = 'dark' | 'light'

interface ThemeModeProps {
  mode: ThemeModeType
  changeMode: (mode: ThemeModeType) => void
}

type ThemeModeProviderProps = {
  children: ReactNode
}

export const ThemeModeContext = createContext({} as ThemeModeProps)

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const [mode, setMode] = usePersistedState<ThemeModeType>('theme', 'light')

  function changeMode(_mode: ThemeModeType) {
    setMode(_mode)
  }

  return (
    <ThemeModeContext.Provider
      value={{
        mode,
        changeMode,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  )
}
