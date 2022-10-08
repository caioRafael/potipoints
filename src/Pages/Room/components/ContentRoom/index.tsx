import { Content } from "./styles";
import { HeaderContent, MainContent, FooterContent} from "../";
import { useState } from 'react';

 
const ContentRoom = () => {
    const [list, setList] = useState<number[]>([])
    const [vote, setVode] = useState<string>('')
    return (
        <Content>
            <HeaderContent setList={setList}/>
            <MainContent list={list}/>
            <FooterContent/>
        </Content>
    );
}
 
export default ContentRoom;

