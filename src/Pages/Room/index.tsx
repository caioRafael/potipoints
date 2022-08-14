import { Image } from "../../components";
import { ContentRoom } from "./components";
import { Container, Header, UserContent } from "./styles";

function Room() {
    return ( 
        <Container>
            <Header>
                <h1>ola mundo</h1>
                <UserContent>
                    <Image 
                        url="https://avatars.githubusercontent.com/u/29779941?v=4"
                        name="avatar"    
                    />
                    <h4>Caio Rafael</h4>
                </UserContent>
            </Header>
            <ContentRoom/>
        </Container>
    );
}

export default Room;