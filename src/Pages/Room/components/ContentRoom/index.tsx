import { Content } from "./styles";
import { HeaderContent, MainContent, FooterContent } from "../";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { RoomVoteContextProvider } from "../../../../context/RoomVoteContext";
// import { useRoom } from "../../../../hooks/useRoom";

const ContentRoom = () => {
    // const {code} = useParams()
    // const {room, users} = useRoom(code as string)
    const [list, setList] = useState<number[]>([])

    return (
        <RoomVoteContextProvider>
            <Content>
                <HeaderContent setList={setList} />
                <MainContent cardList={list} />
                <FooterContent />
            </Content>
        </RoomVoteContextProvider>
    );
}

export default ContentRoom;

