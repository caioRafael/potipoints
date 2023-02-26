import { push, ref } from 'firebase/database'
import { database } from '../firebase'

export default async function makeUserAdmin(roomCode: string, userId: string) {
  const adminsRef = ref(database, `rooms/${roomCode}/admins`)

  await push(adminsRef, userId)
}
