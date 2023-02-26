import { ref, set } from '@firebase/database'
import { database } from '../firebase'

export async function setScoringSystem(
  roomCode: string,
  typeScoringSystem: number,
) {
  const voteRef = ref(database, `rooms/${roomCode}/voting_system`)
  await set(voteRef, typeScoringSystem)
}
