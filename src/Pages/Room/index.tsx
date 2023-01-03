import { Header } from '../../components'
import { ContentRoom } from './components'
import { Container } from './styles'
import { useParams } from 'react-router-dom';
import {useEffect} from 'react'
import { onDisconnect, onValue, ref, set } from 'firebase/database';
import {database} from '../../service/firebase'
import { useAuth } from './../../hooks/useAuth';

function Room() {
  const {code} = useParams()
  const { user } = useAuth()
  const statusUserConnectionRef = ref(database, `/rooms/${code}/users/${user?.id}/status`)
  const connectionDatabaseRef = ref(database, '.info/connected')

  useEffect(() => {
    onValue(connectionDatabaseRef, snapshot => {
      if(snapshot.val() === true){
        set(statusUserConnectionRef, true)

        onDisconnect(statusUserConnectionRef).set(false)
      }
    })
  }, [code, user?.id])

  return (
    <Container>
      <Header/>
      <ContentRoom />
    </Container>
  )
}

export default Room
