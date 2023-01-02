import { FC, useCallback, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useRoom } from '../../../../hooks/useRoom'
import { Card, Container } from '../../../../components'
import { useAuth } from '../../../../hooks/useAuth'
import { setMyVote } from '../../../../service/votes'
import { User } from '../../../../context/AuthContext'

interface FooterContentProps {
  cardList: number[]
}

const CardContent: FC<FooterContentProps> = (props) => {
  const { cardList } = props
  const { user } = useAuth()
  const { code } = useParams()
  const { room } = useRoom(code as string)

  const myVote: string = useMemo(() => {
    if (room && user) {
      const roomUser = room.users.find((u) => u.user_id === user?.id)

      return typeof roomUser?.vote === 'number' ? roomUser.vote : ''
    }
    return ''
  }, [room, user])

  const handleChangeVote = useCallback(
    async (item: number | string) => {
      const vote = String(item) === String(myVote) ? '' : item

      setMyVote(code as string, vote as string, user as User)
    },
    [myVote, user, code],
  )

  const isDisabledCardList = room?.result_reveled || !room || !user

  return (
    <Container>
      {cardList.map((item) => (
        <Card
          key={item}
          onClick={() => handleChangeVote(item)}
          disabled={isDisabledCardList}
          // gambiarra para quando o voto é zero, precisa ser corrigida depois
          isCardSelected={String(myVote) === String(item)}
        >
          <h1>{item}</h1>
        </Card>
      ))}
      <Card
        onClick={() => handleChangeVote('?')}
        disabled={isDisabledCardList}
        isCardSelected={myVote === '?'}
      >
        <h1>?</h1>
      </Card>
      <Card
        onClick={() => handleChangeVote('☕')}
        disabled={isDisabledCardList}
        isCardSelected={myVote === '☕'}
      >
        <h1>☕</h1>
      </Card>
    </Container>
  )
}

export default CardContent
