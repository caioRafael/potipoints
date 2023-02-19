import { ref, remove } from 'firebase/database'
import { database } from '../firebase'

export default async function kickUser(code: string, userId: string) {
  const userRef = ref(database, `rooms/${code}/users/${userId}`)

  await remove(userRef)
}
