import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { NewRoom, Room } from './Pages'

function Routes() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" element={<NewRoom />} />
          <Route path="/room/:code" element={<Room />} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default Routes
