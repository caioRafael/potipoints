import {
  ButtonsContainer,
  Container,
  InputContainer,
  InputRoomCode,
  LinkTo,
  Logo,
} from './styles'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub, BsMicrosoft } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DefaultButton, IconButton, Popover } from '../../components'
import { useAuth } from '../../hooks/useAuth'
import FullLogo from '../../assets/logo-new.svg'
import { Flip, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ArrowRight } from 'phosphor-react'
import { SigInMethodEnum } from '../../enums/SigInEnum'

function EnterRoom() {
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

  const [code, setCode] = useState<string>('')

  const onEnterRoom = async (method: number) => {
    await signIn(method, code)
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

      <InputContainer>
        <InputRoomCode
          placeholder="Código da sala"
          aria-placeholder="Código da sala"
          onChange={(e) => setCode(e.target.value)}
        />

        <Popover
          disabled={!code}
          trigger={
            <IconButton icon={<ArrowRight size={32} />} disabled={!code} />
          }
        >
          <ButtonsContainer>
            <DefaultButton
              icon={<FcGoogle size={16} />}
              text="Entrar com Google"
              type="submit"
              onClick={() => onEnterRoom(SigInMethodEnum.Google)}
            />
            <DefaultButton
              icon={<BsGithub size={16} />}
              text="Entrar com Github"
              type="submit"
              onClick={() => onEnterRoom(SigInMethodEnum.Github)}
            />
            <DefaultButton
              icon={<BsMicrosoft size={16} />}
              text="Entrar com Microsoft"
              type="submit"
              onClick={() => onEnterRoom(SigInMethodEnum.Microsoft)}
            />
          </ButtonsContainer>
        </Popover>
      </InputContainer>
      <LinkTo to="/new-room">Ou crie sua sala</LinkTo>
    </Container>
  )
}

export default EnterRoom
