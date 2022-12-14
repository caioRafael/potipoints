import { FC } from "react";
import { useParams } from "react-router-dom";
import { Image, MainCard } from "../../../../components";
import { useRoom } from "../../../../hooks/useRoom";
import { Container } from "./styles";

const MainContent: FC = () => {
  const { code } = useParams()
  const { users, room } = useRoom(code as string)
  return (
    <Container>
      {users.map(user => (
        <MainCard
          user={user}
          reveled={room?.result_reveled}
          key={user.user_id}
        />
      ))
      }
    </Container >
  );
}

export default MainContent;