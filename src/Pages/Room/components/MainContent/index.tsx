import { FC, useCallback, useState } from "react";
import { useRoomVote } from "../../../../hooks/useRoomVote";
import { useParams } from 'react-router-dom';
import { useRoom } from "../../../../hooks/useRoom";
import { Card, Container } from "../../../../components";

interface FooterContentProps {
  cardList: number[]
}

const MainContent: FC<FooterContentProps> = (props) => {
  const { cardList } = props
  const { setMyVote } = useRoomVote()
  const { code } = useParams()
  const { room } = useRoom(code as string)

  const [selectedItem, setSelectedItem] = useState<number | string>()

  const handleChangeVote = (item: number | string) => {
    let vote = item === selectedItem ? '' : item

    setSelectedItem(vote)
    setMyVote(code as string, vote as string)
  }

  return (
    <Container>
      {cardList.map(item => (
        <Card
          key={item}
          onClick={() => handleChangeVote(item)}
          disabled={room?.result_reveled}
          isCardSelected={selectedItem === item}
        >
          <h1>{item}</h1>
        </Card>
      ))}
      <Card
        onClick={() => handleChangeVote('?')}
        disabled={room?.result_reveled}
        isCardSelected={selectedItem === '?'}
      >
        <h1>?</h1>
      </Card>
    </Container>
  );
}

export default MainContent;