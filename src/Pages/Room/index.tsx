import { Header } from '../../components'
import { ContentRoom } from './components'
import { Container } from './styles'
import {auth, database} from '../../service/firebase'
import { onDisconnect, onValue, ref, set } from 'firebase/database'
import { useParams } from 'react-router-dom';
import {useEffect} from 'react'

function Room() {
  const {code} = useParams()
  const uid = auth.currentUser?.uid
  console.log(uid)

  const statusUserInRoomRef = ref(database, `/rooms/${code}/users/${uid}/status`)

  useEffect(()=>{
    const infoRef = ref(database, '.info/connected')
    onValue(infoRef, async (snapchot) => {
      if(snapchot.val() === false) return;

      // statusUserInRoomRef
      await onDisconnect(statusUserInRoomRef).set(false).then(() => {
        set(statusUserInRoomRef, true)
      })
    })
  }, [code])

  return (
    <Container>
      <Header />
      <ContentRoom />
    </Container>
  )
}

export default Room
