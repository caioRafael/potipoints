import { useContext } from 'react'
import { ThemeModeContext } from '../context/themeMode'

export function useThemeMode() {
  const value = useContext(ThemeModeContext)

  return value
}
