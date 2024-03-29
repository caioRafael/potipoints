import { FC, useCallback, useContext, useMemo } from 'react'
import {
  ChangeButton,
  PrimaryButton,
  TooltipHost,
} from '../../../../components'
import Dropdown, { IDropdownItem } from '../../../../components/Dropdown'
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
import { BiTimeFive, BiCheck } from 'react-icons/bi'
import { ThemeContext } from 'styled-components'

const HeaderContent: FC = () => {
  const { code } = useParams()
  const { room, users } = useRoom(code as string)
  const { colors } = useContext(ThemeContext)

  const item = useMemo(() => {
    return {
      name: ScoringListRecord[room?.voting_system as number],
      value: room?.voting_system as number,
    } as IDropdownItem
  }, [room])

  const setItem = useCallback(
    async (item: IDropdownItem) => {
      await setScoringSystem(code as string, item.value as number)
    },
    [code],
  )

  const hasBlankVotes = useMemo(() => {
    // utilizando o método some para verificar se tem algum voto em branco
    return users
      .filter((user) => user.status === true)
      .some((user) => user.vote === '')
  }, [users])

  const countVotes = useMemo(() => {
    // utilizando o método some para verificar se tem algum voto em branco
    return users.filter((user) => user.vote === '').length
  }, [users])

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
        <PrimaryButton
          width={100}
          text={room?.result_reveled ? 'Ocultar' : 'Revelar'}
          onClick={handleVisibleVote}
        />
        <ChangeButton
          width={100}
          text="Resetar"
          onClick={() => resetAllVotes(code as string, users)}
          disabled={!room?.result_reveled}
        />
        {hasBlankVotes ? (
          <TooltipHost
            content={
              countVotes === 1
                ? `${countVotes} pessoa ainda não votou`
                : `${countVotes} pessoas ainda não votaram`
            }
            disabled={!hasBlankVotes}
          >
            <BiTimeFive size={20} color={colors.secondary} />
          </TooltipHost>
        ) : (
          <BiCheck size={20} color={colors.primary} />
        )}
      </section>

      <RoomCode onClick={copyRoomCode}>
        <FiCopy size={20} />
        {code}
      </RoomCode>

      <Dropdown list={ListItems} config={item} onItemClick={setItem} />
    </Container>
  )
}

export default HeaderContent

const ListItems: IDropdownItem[] = [
  {
    name: ScoringListRecord[ScoringListEnum.Fibonacci as number],
    value: ScoringListEnum.Fibonacci,
  },
  {
    name: ScoringListRecord[ScoringListEnum.Decimal as number],
    value: ScoringListEnum.Decimal,
  },
]
