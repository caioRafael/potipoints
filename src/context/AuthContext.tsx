import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, database, provider } from "../service/firebase";
import { signInWithPopup } from "firebase/auth";
import { ref, set, push, onValue, DataSnapshot } from "firebase/database";

export interface IRoomUser {
  user_id: string;
  vote?: string;
  avatar_url: string;
  name: string;
  email: string;
}

export interface IRoom {
  users: IRoomUser[];
  code: string;
  result_reveled: boolean;
  result_average?: number;
  voting_system: string;
}

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

type AuthContextType = {
  user: User | null;
  signInWithGoogle: (code?: string) => Promise<string>;
  code: string;
  signOut: () => void;
  room: IRoom | null;
  // created_by_user: User;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User|null>(null);
  const [code, setCode] = useState<string>("");
  const [room, setRoom] = useState<IRoom | null>(null);

  useEffect(() => {
    const userLoged = localStorage.getItem("@points:user");
    const codeRoom = localStorage.getItem("@points:code");

    if (userLoged && codeRoom) {
      setUser(JSON.parse(userLoged));
      setCode(codeRoom);
    }
  }, []);

  function signOut() {
    setUser(null);
    setCode("");
    localStorage.clear();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email || "",
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle(code?: string) {
    let newCode = code
      ? code
      : Math.floor(Date.now() * Math.random()).toString(16);

    const result = await signInWithPopup(auth, provider);
    let newUser: User;

    if (result.user) {
      const { displayName, photoURL, uid, email } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }
      const data = {
        id: uid,
        name: displayName,
        avatar: photoURL,
        email: email || "",
      };

      newUser = data;
      setUser(data);

      localStorage.setItem("@points:user", JSON.stringify(data));
      if(code){
        await enterRoom(code, newUser)
      }else{
        newCode = (await createNewRoom(newCode, newUser as User)).toString();
      }
    }

    localStorage.setItem("@points:code", newCode);

    setCode(newCode);

    return newCode;
  }

  async function createNewRoom(roomCode: string, user: User) {
    let initialRoomUser: IRoomUser = {
      avatar_url: user.avatar,
      user_id: user.id,
      name: user.name,
      email: user.email,
    };

    let initialRoom: IRoom = {
      users: [initialRoomUser],
      code: roomCode,
      result_reveled: false,
      voting_system: "fibonacci",
      // created_by_user: initialRoomUser,
    };

    setRoom(initialRoom);
    const roomRef = ref(database, `/rooms`);
    const newPostRef = await push(roomRef, initialRoom);
    return newPostRef.key as string
  }

  async function enterRoom(code: string, user: User) {
    let existedRook: IRoom | null = null

    let roomUser: IRoomUser = {
      avatar_url: user.avatar,
      user_id: user.id,
      name: user.name,
      email: user.email,
    };
    const roomRef = ref(database, `/rooms/${code}`);
    onValue(roomRef, (snapshot: DataSnapshot) => {
      const data = snapshot.val()
      console.log('value', data)
      existedRook = data
    })

    if(!existedRook){
      throw new Error('room not exist')
    }

    const addUserInRoomRef = ref(database, `/rooms/${code}/users`);
    await push(addUserInRoomRef, roomUser );
  }

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
  );
}