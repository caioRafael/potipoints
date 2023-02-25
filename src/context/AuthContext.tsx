import { createContext, ReactNode, useEffect, useState } from 'react'
import { auth, database, provider } from '../service/firebase'
import { signInWithPopup } from 'firebase/auth'
import { ref, set, onValue, DataSnapshot, remove } from 'firebase/database'
import { useNavigate } from 'react-router-dom'
import { ScoringListEnum } from '../enums/ScoringListEnum'

export interface IRoomUser {
  // key?: string;
  user_id: string
  vote?: string
  avatar_url: string
  name: string
  email: string
  status: boolean
}

export interface IRoom {
  users: IRoomUser[]
  admins: string[]
  code: string
  result_reveled: boolean
  result_average?: number
  voting_system: number
}

export type User = {
  id: string
  name: string
  email: string
  avatar: string
  user_code?: string
}

type AuthContextType = {
  user: User | null
  signInWithGoogle: (code?: string) => Promise<string>
  code: string
  signOut: (navigateTo?: string) => Promise<void>
  room: IRoom | null
  // created_by_user: User;
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [code, setCode] = useState<string>('')
  const [room, setRoom] = useState<IRoom | null>(null)

  useEffect(() => {
    const userLogged = localStorage.getItem('@points:user')
    const codeRoom = localStorage.getItem('@points:code')

    if (userLogged && codeRoom) {
      setUser(JSON.parse(userLogged))
      setCode(codeRoom)
    }
  }, [])

  async function removeUserFromRoom(roomCode: string, userId: string) {
    await remove(ref(database, `/rooms/${roomCode}/users/${userId}`))
  }

  async function signOut(navigateTo?: string) {
    await removeUserFromRoom(code, user?.id as string)
    setUser(null)
    setCode('')
    localStorage.clear()
    if (navigateTo) {
      navigate(navigateTo)
    }
  }

  async function createNewRoom(roomCode: string, user: User) {
    const initialRoomUser: IRoomUser = {
      avatar_url: user.avatar,
      user_id: user.id,
      name: user.name,
      email: user.email,
      vote: '',
      status: true,
    }

    const initialRoom: IRoom = {
      users: [],
      admins: [user.id],
      code: roomCode,
      result_reveled: false,
      voting_system: ScoringListEnum.Fibonacci,
      // created_by_user: initialRoomUser,
    }

    setRoom(initialRoom)
    const roomRef = ref(database, `/rooms/${initialRoom.code}`)
    await set(roomRef, initialRoom)
    // alteração feita para que o id ddo usuário seja a key no banco
    const enterRoomRef = ref(
      database,
      `/rooms/${initialRoom.code}/users/${user.id}`,
    )
    await set(enterRoomRef, initialRoomUser)
    return initialRoom.code as string
  }

  async function enterRoom(code: string, user: User) {
    let existedRoom: IRoom | null = null

    const roomUser: IRoomUser = {
      avatar_url: user.avatar,
      user_id: user.id,
      name: user.name,
      email: user.email,
      vote: '',
      status: true,
    }
    const roomRef = ref(database, `/rooms/${code}`)

    onValue(roomRef, async (snapshot: DataSnapshot) => {
      existedRoom = snapshot.val()

      if (!existedRoom) {
        throw new Error('room not exist')
      }
    })
    // alteração feita para que o id ddo usuário seja a key no banco
    const addUserInRoomRef = ref(database, `/rooms/${code}/users/${user.id}`)
    await set(addUserInRoomRef, roomUser)
  }

  async function signInWithGoogle(code?: string) {
    let newCode = code || Math.floor(Date.now() * Math.random()).toString(16)

    const result = await signInWithPopup(auth, provider)
    let newUser: User

    if (result.user) {
      const { displayName, photoURL, uid, email } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.')
      }
      const data = {
        id: uid,
        name: displayName,
        avatar: photoURL,
        email: email || '',
      }

      newUser = data
      setUser(data)

      localStorage.setItem('@points:user', JSON.stringify(data))
      if (code) {
        await enterRoom(code, newUser)
      } else {
        newCode = (await createNewRoom(newCode, newUser as User)).toString()
      }
    }

    localStorage.setItem('@points:code', newCode)

    setCode(newCode)

    return newCode
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email || '',
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        code,
        signOut,
        room,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
