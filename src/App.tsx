import { AuthContextProvider } from "./context/AuthContext"
import Routes from "./routes"

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes/>
      </AuthContextProvider>
    </div>
  )
}

export default App
