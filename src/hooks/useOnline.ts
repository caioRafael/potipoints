import { onDisconnect, onValue, ref, set } from "firebase/database"
import { database } from "../service/firebase"
import { useEffect } from 'react';

export function useOnline(code: string, id: string){
    const statusUserConnectionRef = ref(database, `/rooms/${code}/users/${id}/status`)
    const connectionDatabaseRef = ref(database, '.info/connected')
  
    useEffect(() => {
      onValue(connectionDatabaseRef, snapshot => {
        if(snapshot.val() === true){
          set(statusUserConnectionRef, true)
  
          onDisconnect(statusUserConnectionRef).set(false)
        }
      })
    }, [code, id])
}