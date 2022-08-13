import { Button, Container, Division, GoogleButton, InputRoomCode } from './styles';
import { FcGoogle } from 'react-icons/fc'

function NewRom() {
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

            <form action="">
                <InputRoomCode placeholder='Código da sala'/>
                <Button>Entrar na sala</Button>
            </form>
        </Container>
    );
}

export default NewRom;