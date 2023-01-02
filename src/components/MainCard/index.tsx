import { MouseEvent } from 'react'
import { Avatar } from '..'
import { IRoomUser } from '../../context/AuthContext'
import { MainCardStyles } from './styles'

interface MainCardProps {
  user: IRoomUser
  reveled?: boolean
}

export function MainCard({ user, reveled = false }: MainCardProps) {
  const rightClick = (e: MouseEvent) => {
    e.preventDefault()
    if (e.button === 2){
      console.log('foi')
    }
  }

  return (
    <MainCardStyles
      reveled={reveled}
      key={user.user_id}
      hasVote={!!user.vote || user.vote !== ''}
      // onClick={e => rightClick(e as MouseEvent)}
      onMouseDown={e => rightClick(e as MouseEvent)}
    >
      <div className="card-inner">
        <div className="card-front">
          <span>{user.vote || '?'}</span>
        </div>
        <div className="card-back">
          <Avatar src={user.avatar_url} name={user.name} fallbackAsPicture />
        </div>
      </div>
      <strong>{user.name}</strong>
    </MainCardStyles>
  )
}
