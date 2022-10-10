import { onValue, ref } from 'firebase/database';
import { useState } from 'react';
import { IRoom, IRoomUser } from '../context/AuthContext';
import { database } from '../service/firebase';

export function useRoom(codeRoom: string){
    // const [users, setUsers] = useState<IRoomUser[]>([])
    const [room, setRoom] = useState<IRoom[]>([])

    const roomRef = ref(database, `/rooms/${codeRoom}`);
    // console.log(roomRef)
    onValue(roomRef, (snapshot) => {
      const data = snapshot.val()
      console.log('value', data)
      setRoom(data)
    })

    return { room }
}