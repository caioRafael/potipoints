import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import { Global } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'
import { version } from '../package.json'
import { VersionFooter } from './components'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <VersionFooter>V{version}</VersionFooter>
        <Global />
        <Routes />
        <ToastContainer />
      </div>
    </ThemeProvider>
  )
}

export default App
