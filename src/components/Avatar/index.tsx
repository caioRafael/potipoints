import { FC } from 'react'
import { Root, Image, Fallback } from '@radix-ui/react-avatar'
import { getShortName } from '../../utils/getShortName'
import { Container } from './styles'
import { User } from 'phosphor-react'

interface AvatarProps {
  src: string
  name: string
  fallbackAsPicture?: boolean
}

const Avatar: FC<AvatarProps> = (props) => {
  const { src, name, fallbackAsPicture = false } = props
  return (
    <Container>
      <Root className="AvatarRoot">
        <Image className="AvatarImage" src={src} alt={`avatar de ${name}`} />
        <Fallback className="AvatarFallback" delayMs={600}>
          {fallbackAsPicture ? (
            <User size={32} weight="bold" />
          ) : (
            getShortName(name as string)
          )}
        </Fallback>
      </Root>
    </Container>
  )
}

export default Avatar
