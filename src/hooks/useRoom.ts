import { onValue, ref } from 'firebase/database'
import { useEffect, useMemo, useState } from 'react'
import { IRoom, IRoomUser } from '../context/auth'
import { database } from '../service/firebase'

export function useRoom(codeRoom: string) {
  // const { user, signOut } = useAuth()
  const [users, setUsers] = useState<IRoomUser[]>([])
  const [room, setRoom] = useState<IRoom>()
  const [votes, setVotes] = useState<string[]>([])

  const roomRef = useMemo(() => ref(database, `/rooms/${codeRoom}`), [codeRoom])

  // comentar enquanto não tem uma solução melhor para o bug do login
  // useEffect(() => {
  //   const checkUserInRoom = users.some((u) => u.user_id === user?.id)
  //   if (!checkUserInRoom && users.length > 0) {
  //     signOut('/')
  //   }
  // }, [users, user, signOut])

  useEffect(() => {
    onValue(roomRef, async (snapshot) => {
      const data = await snapshot.val()

      // eslint-disable-next-line prettier/prettier
      const serverUsersFiltered = Object.entries(data.users).map(([_, user]) => user) as unknown as IRoomUser[]
      const usersInRoom = serverUsersFiltered

      const room: IRoom = {
        ...data,
        users: usersInRoom,
      }

      setRoom(room)
      const userList = Object.entries(room.users).map(([_, value]) => {
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
  }, [roomRef])

  useEffect(() => {
    if (room?.result_reveled) {
      const listVotes = room.users
        .filter((user) => !!user.status)
        .map((user) => user.vote as string)
        .filter((vote) => vote !== undefined)

      setVotes(listVotes)
    }
  }, [room?.result_reveled, room?.users])

  return { room, users, votes }
}
