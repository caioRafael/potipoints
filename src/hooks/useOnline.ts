import { onDisconnect, onValue, ref, set } from 'firebase/database'
import { database } from '../service/firebase'
import { useEffect, useMemo } from 'react'

export function useOnline(code: string, id: string) {
  const statusUserConnectionRef = useMemo(() => {
    return ref(database, `/rooms/${code}/users/${id}/status`)
  }, [code, id])
  const connectionDatabaseRef = useMemo(() => {
    return ref(database, '.info/connected')
  }, [])

  useEffect(() => {
    onValue(connectionDatabaseRef, async (snapshot) => {
      if (snapshot.val() === true) {
        await set(statusUserConnectionRef, true)

        await onDisconnect(statusUserConnectionRef).set(false)
      }
    })
  }, [code, id, connectionDatabaseRef, statusUserConnectionRef])
}
