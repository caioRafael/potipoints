import { Content } from "./styles";
import { HeaderContent, MainContent, FooterContent} from "../";
import { useState } from 'react';
import { useParams } from "react-router-dom";
// import { useRoom } from "../../../../hooks/useRoom";
 
const ContentRoom = () => {
    // const {code} = useParams()
    // const {room, users} = useRoom(code as string)
    const [list, setList] = useState<number[]>([])

    return (
        <Content>
            <HeaderContent setList={setList}/>
            <MainContent list={list}/>
            <FooterContent/>
        </Content>
    );
}
 
export default ContentRoom;

