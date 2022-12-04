import { ref, set } from "firebase/database";
import { createContext, ReactNode } from "react";
import { database } from "../service/firebase";
import { useAuth } from './../hooks/useAuth';
import { IRoomUser } from './AuthContext';

interface RoomVoteContextType{
    setMyVote: (roomCodde: string, vote: string) => void
    setVisibleVote: (roomCode: string, state: boolean) => void
    resetVotes: (roomCode: string, users: IRoomUser[]) => void
}

interface RoomVoteContextProviderProps{
    children: ReactNode
}

export const RoomVoteContext = createContext({} as RoomVoteContextType)

export function RoomVoteContextProvider(props: RoomVoteContextProviderProps){
    const {user} = useAuth()
    
    async function setMyVote(roomCode: string, vote: string){
        if(user){
            const voteRef = ref(database, `rooms/${roomCode}/users/${user.id}/vote`)
            await set(voteRef, vote)
        }
    }

    async function setVisibleVote(roomCode: string, state: boolean){
        const voteRef = ref(database, `rooms/${roomCode}/result_reveled`)
        await set(voteRef, !state)
    }

    async function resetVotes(roomCode: string, users: IRoomUser[]){
        const reveledRef = ref(database, `rooms/${roomCode}/result_reveled`)
        await set(reveledRef, false)

        //acredito que deve ter uma forma melhor de resetar os votos
        for await (const user of users) {
            const voteRef = ref(database, `rooms/${roomCode}/users/${user.user_id}/vote`)
            await set(voteRef, '?')
        }
    }

    return(
        <RoomVoteContext.Provider value={{
            setMyVote,
            setVisibleVote,
            resetVotes
        }}>
            {props.children}
        </RoomVoteContext.Provider>
    )
}