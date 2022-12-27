import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import { Global } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Global />
        <Routes />
        <ToastContainer />
      </div>
    </ThemeProvider>
  )
}

export default App
