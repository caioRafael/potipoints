import { Header } from '../../components'
import { ContentRoom } from './components'
import { Container } from './styles'
import { useParams } from 'react-router-dom';
import { useAuth } from './../../hooks/useAuth';
import { useOnline } from '../../hooks/useOnline';

function Room() {
  const {code} = useParams()
  const { user } = useAuth()

  useOnline(code as string, user?.id as string)

  return (
    <Container>
      <Header/>
      <ContentRoom />
    </Container>
  )
}

export default Room
