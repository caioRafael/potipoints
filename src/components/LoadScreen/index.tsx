import { FC } from 'react'
import Header from '../Header'
import { Container, Content, Spinner } from './styles'

const LoadScreen: FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Spinner />
      </Content>
    </Container>
  )
}

export default LoadScreen
