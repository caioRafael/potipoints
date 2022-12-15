import { FC } from "react";
import { useParams } from "react-router-dom";
import { useRoom } from "../../../../hooks/useRoom";
import Average from "../Average";
import { Container } from "./styles";

const FooterContent: FC = () => {
  const { code } = useParams()
  const { room } = useRoom(code as string)
  return (
    <Container>
      <Average reveled={room?.result_reveled} />
    </Container >
  );
}

export default FooterContent;