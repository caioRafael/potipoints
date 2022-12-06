import { ThemeProvider } from "styled-components"
import { AuthContextProvider } from "./context/AuthContext"
import Routes from "./routes"
import { Global } from "./styles/global"
import light from "./styles/themes/light"

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <Global />
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
