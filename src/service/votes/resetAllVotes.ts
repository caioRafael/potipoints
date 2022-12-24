import { ref, set } from 'firebase/database'
import { IRoomUser } from '../../context/AuthContext'
import { database } from '../firebase'

export async function resetAllVotes(roomCode: string, users: IRoomUser[]) {
  const reveledRef = ref(database, `rooms/${roomCode}/result_reveled`)
  await set(reveledRef, false)

  users.forEach(async (user) => {
    const voteRef = ref(
      database,
      `rooms/${roomCode}/users/${user.user_id}/vote`,
    )
    await set(voteRef, '')
  })
}
