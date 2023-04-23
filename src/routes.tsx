import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { NewRoom, Room } from './Pages'
import EnterRoom from './Pages/EnterRoom'
import { Suspense } from 'react'
import LoadScreen from './components/LoadScreen'

function Routes() {
  return (
    <Suspense fallback={<LoadScreen />}>
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
    </Suspense>
  )
}

export default Routes
