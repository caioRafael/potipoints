import { ref, set } from 'firebase/database'
import { database } from '../firebase'

export async function toggleVisibleVote(roomCode: string, visible: boolean) {
  const visibleRef = ref(database, `rooms/${roomCode}/result_reveled`)
  await set(visibleRef, !visible)
}
