import { onValue, ref } from 'firebase/database'
import { useContext, useEffect, useMemo, useState } from 'react'
import { AuthContext } from '../context/auth'
import { database } from '../service/firebase'

export function useAdmin(code: string) {
  const { user } = useContext(AuthContext)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [admins, setAdmins] = useState<string[]>([])

  const roomRef = useMemo(() => ref(database, `/rooms/${code}/admins`), [code])

  useEffect(() => {
    onValue(roomRef, async (snapshot) => {
      const data = await snapshot.val()

      const list = Object.entries(data).map(([_, value]) => value as string)

      setAdmins(list)

      const verifyUserIsAdmin = list.some((id) => id === user?.id)
      setIsAdmin(verifyUserIsAdmin)
    })
  }, [user?.id, roomRef])
  return { admins, isAdmin }
}
