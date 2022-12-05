import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { IRoom, IRoomUser } from '../context/AuthContext';
import { database } from '../service/firebase';

export function useRoom(codeRoom: string){
    const [users, setUsers] = useState<IRoomUser[]>([])
    const [room, setRoom] = useState<IRoom>()

    const roomRef = ref(database, `/rooms/${codeRoom}`);
    
    useEffect(() => {
      onValue(roomRef, (snapshot) => {
        const data: IRoom = snapshot.val()
        setRoom(data)
        const userList = Object.entries(data.users)
        .map(([key, value]) => {
          return{
            user_id: value.user_id,
            vote: value.vote,
            avatar_url: value.avatar_url,
            name: value.name.split(' ')[0],
            email: value.email
          }
        })
        setUsers(userList)
      })
  }, [codeRoom])
    return { room, users }
}