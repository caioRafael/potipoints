import { ToastContainer } from "react-toastify"
import { ThemeProvider } from "styled-components"
import Routes from "./routes"
import { Global } from "./styles/global"
import light from "./styles/themes/light"

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <Global />
        <Routes />
        <ToastContainer />
      </div>
    </ThemeProvider>
  )
}

export default App
