import { Header } from '../../components'
import { ContentRoom } from './components'
import { Container } from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from './../../hooks/useAuth'
import { useOnline } from '../../hooks/useOnline'
import { useEffect } from 'react'

function Room() {
  const { code } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  useOnline(code as string, user?.id as string)

  useEffect(() => {
    if (user === null) {
      navigate(`/?code=${code}`)
    }
    // array de dependencias vazio para executar apenas uma vez
  }, [])

  return (
    <Container>
      <Header />
      <ContentRoom />
    </Container>
  )
}

export default Room
