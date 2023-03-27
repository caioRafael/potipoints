import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { NewRoom, Room } from './Pages'
import EnterRoom from './Pages/EnterRoom'

function Routes() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" element={<EnterRoom />} />
          <Route path="/new-room" element={<NewRoom />} />
          <Route path="/room/:code" element={<Room />} />
          {/* <Route path='/presentation' element={<Presentation/>}/> */}
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default Routes
