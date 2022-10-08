import { Container, Division, GoogleButton, InputRoomCode } from './styles';
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components';
import { getAuth, signInWithPopup, GoogleAuthProvider,  } from "firebase/auth";
import {app} from '../../service/firebase'
import { useAuth } from '../../hooks/useAuth';


function NewRoom() {
    const {signInWithGoogle} = useAuth()
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()

    const {options} = app

    console.log(options)
    const [code, setCode] = useState<string>()

    const enterRoom = useCallback(async (event: FormEvent) => {
        event.preventDefault()
        await signInWithGoogle()
        navigate(`/room/${code}`)
    }, [code])

    async function signIn(){
        const auth = getAuth()

        const result = await signInWithPopup(auth, provider);
    
        if (result.user) {
          const { displayName, photoURL, uid } = result.user
    
          if (!displayName || !photoURL) {
            throw new Error('Missing information from Google Account.');
          }
    
          console.log({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
        }
    }

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