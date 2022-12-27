import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { NewRoom, Presentation, Room } from './Pages'

function Routes() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" element={<NewRoom />} />
          <Route path="/room/:code" element={<Room />} />
          <Route path='/presentation' element={<Presentation/>}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default Routes
