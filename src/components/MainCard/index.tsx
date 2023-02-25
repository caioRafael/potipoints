import { MouseEvent, useCallback, useState, useMemo } from 'react'
import { Avatar, RightClickMenu } from '..'
import { IRoomUser } from '../../context/AuthContext'
import { IItemMenu, IRightClickMenu } from '../RightClickMenu'
import { MainCardStyles } from './styles'
import { useParams } from 'react-router-dom'
import { useAdmin } from '../../hooks/useAdmin'
import { kickUser, makeUserAdmin } from '../../service/admin'

interface MainCardProps {
  user: IRoomUser
  reveled?: boolean
}

export function MainCard({ user, reveled = false }: MainCardProps) {
  const { code } = useParams()
  const { isAdmin } = useAdmin(code as string)
  const userVote = user.vote !== undefined ? user.vote : '?'
  const [menu, setMenu] = useState(false)
  const [position, setPosition] = useState<IRightClickMenu>({
    x: 0,
    y: 0,
  })

  const handleMenu = useCallback(
    (event: MouseEvent) => {
      event.preventDefault()
      setMenu(!menu)
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    },
    [position, menu],
  )

  const itemsMenu: IItemMenu[] = useMemo(
    () => [
      {
        key: 'newAdmin',
        name: 'Tornar admin',
        action: () => makeUserAdmin(code as string, user.user_id),
      },
      // {
      //   key: 'kickOut',
      //   name: 'Expulsar da sala',
      //   action: () => kickUser(code as string, user.user_id),
      // },
    ],
    [],
  )

  return (
    <>
      <MainCardStyles
        reveled={reveled}
        key={user.user_id}
        hasVote={!!user.vote || user.vote !== ''}
        onContextMenu={handleMenu}
      >
        <div className="card-inner">
          <div className="card-front">
            <span>{userVote}</span>
          </div>
          <div className="card-back">
            <Avatar src={user.avatar_url} name={user.name} fallbackAsPicture />
          </div>
        </div>
        <strong>{user.name}</strong>
      </MainCardStyles>
      {isAdmin && (
        <RightClickMenu
          position={position}
          visible={menu}
          dismiss={setMenu}
          items={itemsMenu}
        />
      )}
    </>
  )
}
