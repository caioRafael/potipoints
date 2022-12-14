import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { IRoom, IRoomUser } from '../context/AuthContext';
import { database } from '../service/firebase';

export function useRoom(codeRoom: string) {
  const [users, setUsers] = useState<IRoomUser[]>([])
  const [room, setRoom] = useState<IRoom>()
  const [votes, setVotes] = useState<string[]>([])

  const roomRef = ref(database, `/rooms/${codeRoom}`);

  useEffect(() => {
    onValue(roomRef, async (snapshot) => {
      const data = await snapshot.val()

      const room: IRoom = {
        ...data,
        users: Object.entries(data.users).map(([_, user]) => user),
      }

      setRoom(room)
      const userList = Object.entries(room.users)
        .map(([key, value]) => {
          return {
            user_id: value.user_id,
            vote: value.vote,
            avatar_url: value.avatar_url,
            name: value.name?.split(' ')[0],
            email: value.email
          }
        })
      setUsers(userList)
    })
  }, [codeRoom])

  useEffect(() => {
    if (room?.result_reveled) {
      const listVotes = Object.entries(room.users)
        .map(([key, value]) => {
          return value.vote as string
        })

      setVotes(listVotes)
    }
  }, [room?.result_reveled])

  return { room, users, votes }
}