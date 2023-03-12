import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'

const signInWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, provider)
  } catch (err: any) {
    if (err.code === 'auth/account-exists-with-different-credential') {
      throw new Error(
        'E-mail ja está associado a uma conta, tente outro método de login',
      )
    }
  }
}

export default signInWithGoogle
