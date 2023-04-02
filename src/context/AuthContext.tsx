import { createContext, ReactNode, useEffect, useState } from 'react'
import { auth, database } from '../service/firebase'
import { UserCredential } from 'firebase/auth'
import { ref, set, onValue, DataSnapshot, remove } from 'firebase/database'
import { useNavigate } from 'react-router-dom'
import { ScoringListEnum } from '../enums/ScoringListEnum'
import signInMetod from '../service/signIn/signInMethod'
import { verifyExistingRoom } from '../service/room'

export interface IRoomUser {
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
  signIn: (typeSignIn: number, code?: string) => Promise<string | undefined>
  code: string
  signOut: (navigateTo?: string) => Promise<void>
  room: IRoom | null
  error: string | null
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
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const userLogged = localStorage.getItem('@points:user')
    const codeRoom = localStorage.getItem('@points:code')

    if (userLogged && codeRoom) {
      setUser(JSON.parse(userLogged))
      setCode(codeRoom)
    }
  }, [])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user

        if (!displayName) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL || '',
          email: email || '',
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  async function removeUserFromRoom(roomCode: string, userId: string) {
    await remove(ref(database, `/rooms/${roomCode}/users/${userId}`))
  }

  async function signOut(navigateTo?: string) {
    await removeUserFromRoom(code, user?.id as string)
    auth.signOut()
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
    }

    setRoom(initialRoom)
    const roomRef = ref(database, `/rooms/${initialRoom.code}`)
    await set(roomRef, initialRoom)
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

  async function signIn(typeSignIn: number, code?: string) {
    const verify = await verifyExistingRoom(code as string)

    try {
      if (!verify) {
        throw new Error('Sala não existe')
      }

      let newCode = code || Math.floor(Date.now() * Math.random()).toString(16)

      const result = (await signInMetod(typeSignIn)) as UserCredential
      let newUser: User

      if (result && result.user) {
        const { displayName, photoURL, uid, email } = result.user

        if (!displayName) {
          throw new Error('Missing information from Google Account.')
        }
        const data = {
          id: uid,
          name: displayName,
          avatar: photoURL || '',
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
    } catch (error) {
      setError(String(error))
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        code,
        signOut,
        room,
        error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
