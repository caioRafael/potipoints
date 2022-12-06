import { IRoomUser } from "../../context/AuthContext";
import Image from "../Image";
import { MainCardStyles } from "./styles";

interface MainCardProps {
  user: IRoomUser
  reveled?: boolean
}

export function MainCard({ user, reveled = false }: MainCardProps) {

  return (
    <MainCardStyles
      reveled={reveled}
      key={user.user_id}
      hasVote={!!user.vote || user.vote !== ''}
    >
      <div className="card-inner">
        <div className='card-front'>
          <span>{user.vote}</span>
        </div>
        <div className='card-back'>
          <Image
            url={user.avatar_url}
            name={user.name}
          />
        </div>
      </div>
      <strong>{user.name}</strong>
    </MainCardStyles>
  )
}