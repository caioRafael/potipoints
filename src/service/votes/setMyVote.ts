import { ref, set } from 'firebase/database'
import { User } from '../../context/AuthContext'
import { database } from '../firebase'

export async function setMyVote(roomCode: string, vote: string, user: User) {
  const voteRef = ref(database, `rooms/${roomCode}/users/${user.id}/vote`)
  await set(voteRef, vote)
}
