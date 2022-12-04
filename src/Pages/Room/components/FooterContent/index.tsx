import { FC } from "react";
import { useParams } from "react-router-dom";
import { Image } from "../../../../components";
import { useRoom } from "../../../../hooks/useRoom";
import { Card, Container } from "./styles";
 
const FooterContent: FC = () => {
    const {code} = useParams()
    const {users} = useRoom(code as string)
    return (
        <Container>
            {users.map(user => (
                <Card key={user.user_id}>
                    <div>
                        <Image 
                            url={user.avatar_url}
                            name={user.name}    
                        />
                        <h1>{user.vote || '?'}</h1>
                    </div>
                    <strong>{user.name}</strong>
                </Card>
            ))}
        </Container>
    );
}
 
export default FooterContent;