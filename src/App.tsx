import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import { Global } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'
import { version } from '../package.json'
import { VersionFooter } from './components'
import { darkTheme } from './styles/themes/darkTheme'
import { useThemeMode } from './hooks/useThemeMode'
import { useMemo } from 'react'

function App() {
  const { mode } = useThemeMode()

  const theme = useMemo(
    () => (mode === 'dark' ? darkTheme : defaultTheme),
    [mode],
  )

  return (
    <ThemeProvider theme={theme}>
      <VersionFooter>alpha release v{version}</VersionFooter>
      <Global />
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
