import { Header } from "../../components";
import { ContentRoom } from "./components";
import { Container } from "./styles";
import { useAuth } from "./../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


function Room() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    if (window.confirm('Você será deslogado do sistema!')) {
      signOut()
      navigate('/')
    }
  }, [user, signOut])

  return (
    <Container>
      <Header
        user={user}
        onSignOut={handleSignOut}
      />
      <ContentRoom />
    </Container>
  );
}

export default Room;
