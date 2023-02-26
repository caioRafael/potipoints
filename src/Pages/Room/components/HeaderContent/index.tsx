import { FC, useCallback, useMemo } from 'react'
import {
  ChangeButton,
  PrimaryButton,
  TooltipHost,
} from '../../../../components'
import Dropdown, { DropdownItem } from '../../../../components/Dropdown'
import { useRoom } from '../../../../hooks/useRoom'
import { Container, RoomCode } from './styles'
import { useParams } from 'react-router-dom'
import { FiCopy } from 'react-icons/fi'
import { Flip, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { resetAllVotes, toggleVisibleVote } from '../../../../service/votes'
import { ScoringListEnum } from '../../../../enums/ScoringListEnum'
import { setScoringSystem } from '../../../../service/votes/setScoringSystem'
import ScoringListRecord from '../../../../records/ScoringListRecord'

const HeaderContent: FC = () => {
  const { code } = useParams()
  const { room, users } = useRoom(code as string)

  const item = useMemo(() => {
    return {
      name: ScoringListRecord[room?.voting_system as number],
      value: room?.voting_system as number,
    } as DropdownItem
  }, [room])

  const setItem = useCallback(
    async (item: DropdownItem) => {
      await setScoringSystem(code as string, item.value)
    },
    [code],
  )

  const hasBlankVotes = useMemo(() => {
    // utilizando o método some para verificar se tem algum voto em branco
    return users
      .filter((user) => user.status === true)
      .some((user) => user.vote === '')
  }, [users])

  console.log(hasBlankVotes)

  function copyRoomCode() {
    navigator.clipboard.writeText(code as string)
    toast.info('Código copiado!', {
      position: toast.POSITION.TOP_CENTER,
      theme: 'colored',
      transition: Flip,
      autoClose: 2000,
    })
  }

  const handleVisibleVote = () => {
    toggleVisibleVote(code as string, room?.result_reveled as boolean)
  }

  return (
    <Container>
      <section>
        <TooltipHost
          content="Aguarde até que todos votem"
          disabled={!hasBlankVotes}
        >
          <PrimaryButton
            width={100}
            text={room?.result_reveled ? 'Ocultar' : 'Revelar'}
            onClick={handleVisibleVote}
            disabled={hasBlankVotes}
          />
        </TooltipHost>
        <ChangeButton
          width={100}
          text="Resetar"
          onClick={() => resetAllVotes(code as string, users)}
          disabled={!room?.result_reveled}
        />
      </section>

      <RoomCode onClick={copyRoomCode}>
        <FiCopy size={20} />
        {code}
      </RoomCode>

      <Dropdown list={ListItems} item={item} setItem={setItem} />
    </Container>
  )
}

export default HeaderContent

const ListItems: DropdownItem[] = [
  {
    name: ScoringListRecord[ScoringListEnum.Fibonacci as number],
    value: ScoringListEnum.Fibonacci,
  },
  {
    name: ScoringListRecord[ScoringListEnum.Decimal as number],
    value: ScoringListEnum.Decimal,
  },
]
