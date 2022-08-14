import { Container, Division, GoogleButton, InputRoomCode } from './styles';
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components';

function NewRoom() {
    const navigate = useNavigate()

    const [code, setCode] = useState<string>()

    const enterRoom = useCallback((event: FormEvent) => {
        event.preventDefault()
        navigate(`/room/${code}`)
    }, [code])

    return ( 
        <Container>
            <h1>Apontamentos</h1>
            <GoogleButton>
                <FcGoogle size={25}/>
                Crie um sala com sua conta Google
            </GoogleButton>

            <Division>
                Ou ente em uma sala
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