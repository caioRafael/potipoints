import { get, ref } from 'firebase/database'
import { database } from '../firebase'

export default async function verifyExistingRoom(roomCode: string) {
  const roomRef = ref(database, `rooms/${roomCode}`)
  const room = (await get(roomRef)).exists()

  return room
}
