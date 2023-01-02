import { Avatar } from '..'
import { IRoomUser } from '../../context/AuthContext'
import { MainCardStyles } from './styles'

interface MainCardProps {
  user: IRoomUser
  reveled?: boolean
}

export function MainCard({ user, reveled = false }: MainCardProps) {
  const userVote = user.vote !== undefined ? user.vote : '?'

  return (
    <MainCardStyles
      reveled={reveled}
      key={user.user_id}
      hasVote={!!user.vote || user.vote !== ''}
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
  )
}
