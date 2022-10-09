import { getDatabase } from "firebase/database";
import { Image } from "../../components";
import { ContentRoom } from "./components";
import { Container, Header, IconButton, UserContent } from "./styles";
import { useAuth } from "./../../hooks/useAuth";
import { app } from "../../service/firebase";
import { SignOut } from "phosphor-react";
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


function Room() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth();

  const exit = useCallback(() => {
    if(window.confirm('Você será deslogado do sistema!')){
        signOut()
        navigate('/')
    }
  }, [user, signOut])
  
  return (
    <Container>
      <Header>
        <h1>PotiPoints</h1>
        <UserContent>
          <Image url={user?.avatar} name={user?.name} />
          <h4>{user?.name}</h4>
          <IconButton onClick={exit}>
            <SignOut size={24} color={'#f7f8fa'}/>
          </IconButton>
        </UserContent>
      </Header>
      <ContentRoom />
    </Container>
  );
}

export default Room;
