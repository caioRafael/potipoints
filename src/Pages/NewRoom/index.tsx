import { Container, Division, GoogleButton, InputRoomCode } from './styles';
import { FcGoogle } from 'react-icons/fc'
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components';
// import { getAuth, signInWithPopup, GoogleAuthProvider,  } from "firebase/auth";
// import {app} from '../../service/firebase'
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';

function NewRoom() {
    const { signInWithGoogle, code: roomCode } = useAuth()
    // const provider = new GoogleAuthProvider();
    const navigate = useNavigate()

    // const {options} = app

    const [code, setCode] = useState<string>('')


    const enterRoom = async (event: FormEvent) => {
        event.preventDefault()
        const codeRoute = await signInWithGoogle(code)
        navigate(`/room/${codeRoute}`)
    }

    const createNewRoom = async () => {
        const codeRoute = await signInWithGoogle()
        navigate(`/room/${codeRoute}`)
    }

    useEffect(() => {
        if (roomCode) navigate(`/room/${roomCode}`)
    }, [roomCode])

    return (
        <Container>
            <h1>Apontamentos</h1>
            <GoogleButton
                onClick={() => createNewRoom()}
            >
                <FcGoogle size={25} />
                Crie uma sala com sua conta Google
            </GoogleButton>

            <Division>
                Ou entre em uma sala com sua conta Google
            </Division>

            <form onSubmit={enterRoom}>
                <InputRoomCode
                    placeholder='Código da sala'
                    onChange={e => setCode(e.target.value)}
                />
                <PrimaryButton
                    text='Entrar na sala'
                    type='submit'
                />
            </form>
        </Container>
    );
}

export default NewRoom;