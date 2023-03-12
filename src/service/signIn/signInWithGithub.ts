import { signInWithPopup } from 'firebase/auth'
import { auth, githubProvider } from '../firebase'

const signInWithGithub = async () => {
  try {
    return await signInWithPopup(auth, githubProvider)
  } catch (err: any) {
    if (err.code === 'auth/account-exists-with-different-credential') {
      throw new Error(
        'E-mail ja está associado a uma conta, tente outro método de login',
      )
    }
  }
}

export default signInWithGithub
