import { ButtonsContainer, Container, LinkTo, Logo } from './styles'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub, BsMicrosoft } from 'react-icons/bs'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DefaultButton } from '../../components'
import { useAuth } from '../../hooks/useAuth'
import FullLogo from '../../assets/logo-new.svg'
import { SigInMethodEnum } from '../../enums/SigInEnum'
import { Flip, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function NewRoom() {
  const { signIn, code: roomCode, error } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored',
        transition: Flip,
        autoClose: 5000,
      })
    }
  }, [error])

  const createRoomGoogle = async () => {
    await signIn(SigInMethodEnum.Google)
  }

  const createRoomGithub = async () => {
    await signIn(SigInMethodEnum.Github)
  }

  const createRoomMicrosoft = async () => {
    await signIn(SigInMethodEnum.Microsoft)
  }
  useEffect(() => {
    if (roomCode) navigate(`/room/${roomCode}`)
  }, [roomCode, navigate])

  return (
    <Container>
      <Logo
        src={FullLogo}
        alt="Cartas em formato de camarão com texto ao lado com o nome da aplicação"
      />

      <ButtonsContainer>
        <DefaultButton
          icon={<FcGoogle size={16} />}
          text="Criar sala com Google"
          type="submit"
          onClick={createRoomGoogle}
        />
        <DefaultButton
          icon={<BsGithub size={16} />}
          text="Criar sala com Github"
          type="submit"
          onClick={createRoomGithub}
        />
        <DefaultButton
          icon={<BsMicrosoft size={16} />}
          text="Criar sala com Microsoft"
          type="submit"
          onClick={createRoomMicrosoft}
        />
        <LinkTo to="/">Ou entre com um código existente</LinkTo>
      </ButtonsContainer>
    </Container>
  )
}

export default NewRoom
