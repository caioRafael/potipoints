import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useRoomVote } from "../../../../hooks/useRoomVote";
import { useParams } from 'react-router-dom';
import { useRoom } from "../../../../hooks/useRoom";
import { Card, Container } from "../../../../components";
import { useAuth } from "../../../../hooks/useAuth";
import Average from './../Average/index';

interface FooterContentProps {
  cardList: number[]
}

const MainContent: FC<FooterContentProps> = (props) => {
  const { cardList } = props
  const { user } = useAuth()
  const { setMyVote } = useRoomVote()
  const { code } = useParams()
  const { room } = useRoom(code as string)

  const myVote = useMemo(() => {
    if (room && user) {
      const roomUser = room.users.find(u => u.user_id === user?.id)

      return roomUser?.vote || ''
    }
    return ''
  }, [room, user])

  const handleChangeVote = (item: number | string) => {
    let vote = String(item) === myVote ? '' : item

    setMyVote(code as string, String(vote))
  }

  return (
    <Container>
      {room?.result_reveled ? 
        <Average/>
        :
        <>
          {cardList.map(item => (
            <Card
              key={item}
              onClick={() => handleChangeVote(item)}
              disabled={room?.result_reveled}
              isCardSelected={myVote === String(item)}
            >
              <h1>{item}</h1>
            </Card>
          ))}
          <Card
            onClick={() => handleChangeVote('?')}
            disabled={room?.result_reveled}
            isCardSelected={myVote === '?'}
          >
            <h1>?</h1>
          </Card>
          <Card
            onClick={() => handleChangeVote('☕')}
            disabled={room?.result_reveled}
            isCardSelected={myVote === '☕'}
          >
            <h1>☕</h1>
          </Card>
        </>
      }
    </Container>
  );
}

export default MainContent;