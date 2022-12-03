import { Content } from "./styles";
import { HeaderContent, MainContent, FooterContent} from "../";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { database } from "../../../../service/firebase";
import { onValue, ref } from "firebase/database";
import { useRoom } from "../../../../hooks/useRoom";

/**
 * 1- criar uma função para toda a sala, em que ira trazer os dados em tempo real
 * qunado os dados forem revelados, utilizar a função onValue
 * 2- listar os usuários para com votos de forma separada
 */
 
const ContentRoom = () => {
    const {code} = useParams()
    const {room, users} = useRoom(code as string)
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

