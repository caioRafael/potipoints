import { FC } from 'react'
import Header from '../Header'
import { Container, Spinner } from './styles'

const LoadScreen: FC = () => {
  return (
    <Container>
      <Header />
      <Spinner />
    </Container>
  )
}

export default LoadScreen
