import { onValue, ref } from 'firebase/database'
import { useEffect, useState } from 'react'
import { IRoom, IRoomUser } from '../context/AuthContext'
import { database } from '../service/firebase'
import { useAuth } from './useAuth'

export function useRoom(codeRoom: string) {
  const { user, signOut } = useAuth()
  const [users, setUsers] = useState<IRoomUser[]>([])
  const [room, setRoom] = useState<IRoom>()
  const [votes, setVotes] = useState<string[]>([])

  const roomRef = ref(database, `/rooms/${codeRoom}`)

  useEffect(() => {
    const checkUserInRoom = users.some((u) => u.user_id === user?.id)

    if (!checkUserInRoom && users.length > 0) {
      signOut('/')
    }
  }, [users])

  useEffect(() => {
    onValue(roomRef, async (snapshot) => {
      const data = await snapshot.val()

      const room: IRoom = {
        ...data,
        users: Object.entries(data.users).map(([_, user]) => user),
      }

      setRoom(room)
      const userList = Object.entries(room.users).map(([key, value]) => {
        return {
          user_id: value.user_id,
          vote: value.vote,
          avatar_url: value.avatar_url,
          name: value.name?.split(' ')[0],
          email: value.email,
          status: value.status,
        }
      })

      setUsers(
        userList.filter((user) => {
          return user.user_id !== undefined && user.status === true
        }) as IRoomUser[],
      )
    })
  }, [codeRoom])

  useEffect(() => {
    if (room?.result_reveled) {
      const listVotes = Object.entries(room.users).map(([key, value]) => {
        return value.vote as string
      })

      setVotes(listVotes)
    }
  }, [room?.result_reveled, room?.users])

  return { room, users, votes }
}
