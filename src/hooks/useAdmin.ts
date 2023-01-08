import { onValue, ref } from 'firebase/database'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { database } from '../service/firebase'

export function useAdmin(code: string) {
  const {user} = useContext(AuthContext)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [admins, setAdmins] = useState<string[]>([])

  const roomRef = ref(database, `/rooms/${code}/admins`)

  useEffect(() => {
    onValue(roomRef, async(snapchot) => {
        const data = await snapchot.val()

        const list = Object.entries(data).map(([_, value]) => value as string)

        setAdmins(list)

        const verifyUserIsAdmin = list.some(id => id === user?.id)
        setIsAdmin(verifyUserIsAdmin)
    })
  }, [code])
  return { admins, isAdmin }
}
