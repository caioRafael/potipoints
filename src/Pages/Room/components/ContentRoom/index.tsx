import { Content } from "./styles";
import { HeaderContent, FooterContent, CardContent, MainContent } from "../";
import { useState } from 'react';

const ContentRoom = () => {
    const [list, setList] = useState<number[]>([])

    return (
        <Content>
            <HeaderContent setList={setList} />
            <CardContent cardList={list} />
            <MainContent />
            <FooterContent />
        </Content>
    );
}

export default ContentRoom;

