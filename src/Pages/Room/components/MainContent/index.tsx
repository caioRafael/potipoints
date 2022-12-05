import { FC, useCallback, useState } from "react";
import { useRoomVote } from "../../../../hooks/useRoomVote";
import { Card, Container } from "./styles";
import { useParams } from 'react-router-dom';
import { useRoom } from "../../../../hooks/useRoom";

interface FooterContentProps{
    list: number[]
}
 
const MainContent: FC<FooterContentProps> = (props) => {
    const {list} = props
    const {setMyVote} = useRoomVote()
    const {code} = useParams()
    const {room} = useRoom(code as string)

    const [selectedItem, setSelectedItem] = useState<number|string>()
    
    const select = useCallback(async (item: number) => {
        setSelectedItem(item)
        await setMyVote(code as string, item+'' as string)
    }, [selectedItem])

    return (
        <Container>
            {list.map(item => (
                <Card 
                    key={item}
                    onClick={!room?.result_reveled ? () => select(item) : () => {}}
                    style={{
                        borderColor: `${item === selectedItem ? '#0069d9' : '#bbbbc4'}`
                    }}
                >
                    <h1>{item}</h1>
                </Card>
            ))}
            <Card
                onClick={() => setSelectedItem('?')}
                style={{
                    borderColor: `${selectedItem === '?' ? '#0069d9' : '#bbbbc4'}`
                }}
            >
                <h1>?</h1>
            </Card>
        </Container>
    );
}
 
export default MainContent;