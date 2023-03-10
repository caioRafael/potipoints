import {
  Container,
  Division,
  GoogleButton,
  InputRoomCode,
  Logo,
} from './styles'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../components'
import { useAuth } from '../../hooks/useAuth'
import FullLogo from '../../assets/full-logo.svg'

function NewRoom() {
  const { signInWithGoogle, signInWithGithub, code: roomCode } = useAuth()
  const navigate = useNavigate()

  const [code, setCode] = useState<string>('')

  const enterRoomWithGoogle = async () => {
    await signInWithGoogle(code)
  }

  const enterRoomWithGithub = async () => {
    await signInWithGithub(code)
  }

  const createNewRoomWithGoogle = async () => {
    await signInWithGoogle()
  }

  const createNewRoomWithGithub = async () => {
    await signInWithGithub()
  }

  useEffect(() => {
    if (roomCode) navigate(`/room/${roomCode}`)
  }, [roomCode, navigate])

  return (
    <Container>
      <Logo src={FullLogo} alt="full-logo" />

      <Division>Crie uma sala com sua conta Google ou Github</Division>

      <div className="containerButtons">
        <GoogleButton onClick={createNewRoomWithGoogle}>
          <FcGoogle size={25} />
        </GoogleButton>
        <GoogleButton onClick={createNewRoomWithGithub}>
          <BsGithub size={25} />
        </GoogleButton>
      </div>

      <Division>Ou entre em uma sala com sua conta Google ou Github</Division>

      <InputRoomCode
        placeholder="Código da sala"
        onChange={(e) => setCode(e.target.value)}
      />
      <PrimaryButton
        icon={<FcGoogle size={25} />}
        text="Entrar na sala com Google"
        type="submit"
        onClick={enterRoomWithGoogle}
        disabled={!code}
      />
      <PrimaryButton
        icon={<BsGithub size={25} />}
        text="Entrar na sala com Github"
        type="submit"
        onClick={enterRoomWithGithub}
        disabled={!code}
      />
    </Container>
  )
}

export default NewRoom
