import { Content } from "./styles";
import {MainContent, HeaderContent, FooterContent} from "../";
import { useState } from 'react';

 
const ContentRoom = () => {
    const [list, setList] = useState<number[]>([])
    const [vote, setVode] = useState<string>('')
    return (
        <Content>
            <HeaderContent setList={setList}/>
            <MainContent/>
            <FooterContent list={list}/>
        </Content>
    );
}
 
export default ContentRoom;

