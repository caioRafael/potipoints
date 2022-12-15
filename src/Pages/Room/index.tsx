import { Header } from "../../components";
import { ContentRoom } from "./components";
import { Container } from "./styles";

function Room() {
  return (
    <Container>
      <Header />
      <ContentRoom />
    </Container>
  );
}

export default Room;
