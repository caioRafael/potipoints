import { MouseEvent, useState } from 'react'
import { Avatar, RightClickMenu } from '..'
import { IRoomUser } from '../../context/AuthContext'
import { IRightClickMenu } from '../RightClickMenu'
import { MainCardStyles } from './styles'

interface MainCardProps {
  user: IRoomUser
  reveled?: boolean
}

export function MainCard({ user, reveled = false }: MainCardProps) {
  const userVote = user.vote !== undefined ? user.vote : '?'
  const [menu, setMenu] = useState(true)

  const handleMenu = (event: MouseEvent) => {
    event.preventDefault()
    setMenu(!menu)
  }

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
      <RightClickMenu
        position={{
          x: 0,
          y: 0,
        } as IRightClickMenu}
        visible={menu}
      />
    </>
  )
}
