import { FC, useCallback, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useRoom } from '../../../../hooks/useRoom'
import { Card, Container } from '../../../../components'
import { useAuth } from '../../../../hooks/useAuth'
import { setMyVote } from '../../../../service/votes'
import { User } from '../../../../context/auth'
import { ScoringListEnum } from '../../../../enums/ScoringListEnum'
import fibonacci from '../../../../utils/fibonacci'
import decimal from '../../../../utils/decimal'

const CardContent: FC = () => {
  const { user } = useAuth()
  const { code } = useParams()
  const { room } = useRoom(code as string)

  const myVote: string = useMemo(() => {
    if (room && user) {
      const roomUser = room.users.find((u) => u.user_id === user?.id)
      return typeof roomUser?.vote === 'number' ||
        typeof roomUser?.vote === 'string'
        ? roomUser.vote
        : ''
    }
    return ''
  }, [room, user])

  const newCardList = useMemo(() => {
    switch (room?.voting_system) {
      case ScoringListEnum.Fibonacci:
        return fibonacci() as number[]
      case ScoringListEnum.Decimal:
        return decimal() as number[]
      default:
        break
    }
  }, [room])

  const handleChangeVote = useCallback(
    async (item: number | string) => {
      const vote = String(item) === String(myVote) ? '' : item

      setMyVote(code as string, vote as string, user as User)
    },
    [myVote, user, code],
  )

  const isDisabledCardList = room?.result_reveled || !room || !user

  const verifyCardIsSelected = (item: number) => {
    return String(myVote) === String(item)
  }

  return (
    <Container>
      {newCardList?.map((item) => (
        <Card
          key={item}
          onClick={() => handleChangeVote(item)}
          disabled={isDisabledCardList}
          isCardSelected={verifyCardIsSelected(item)}
        >
          {item}
        </Card>
      ))}
      <Card
        onClick={() => handleChangeVote('?')}
        disabled={isDisabledCardList}
        isCardSelected={myVote === '?'}
      >
        ?
      </Card>
      <Card
        onClick={() => handleChangeVote('☕')}
        disabled={isDisabledCardList}
        isCardSelected={myVote === '☕'}
      >
        ☕
      </Card>
    </Container>
  )
}

export default CardContent
