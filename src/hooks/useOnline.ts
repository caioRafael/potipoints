import { onDisconnect, onValue, ref, set } from 'firebase/database'
import { database } from '../service/firebase'
import { useEffect } from 'react'

export function useOnline(code: string, id: string) {
  const statusUserConnectionRef = ref(
    database,
    `/rooms/${code}/users/${id}/status`,
  )
  const connectionDatabaseRef = ref(database, '.info/connected')

  useEffect(() => {
    onValue(connectionDatabaseRef, async (snapshot) => {
      if (snapshot.val() === true) {
        await set(statusUserConnectionRef, true)

        await onDisconnect(statusUserConnectionRef).set(false)
      }
    })
  }, [code, id])
}
