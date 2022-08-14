import { FC, useCallback, useState } from "react";
import { Card, Container } from "./styles";

interface FooterContentProps{
    list: number[]
}
 
const FooterContent: FC<FooterContentProps> = (props) => {
    const {list} = props

    const [selectedItem, setSelectedItem] = useState<number|string>()
    
    const select = useCallback((item: number) => {
        setSelectedItem(item)
    }, [selectedItem])

    return (
        <Container>
            {list.map(item => (
                <Card 
                    key={item}
                    onClick={() => select(item)}
                    style={{
                        borderColor: `${item === selectedItem ? '#0069d9' : '#bbbbc4'}`
                    }}
                >
                    <h1>{item}</h1>
                </Card>
            ))}
            <Card
                onClick={() => console.log('?')}
            >
                <h1>?</h1>
            </Card>
        </Container>
    );
}
 
export default FooterContent;