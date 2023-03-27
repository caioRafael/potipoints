import { SigInMethodEnum } from '../../enums/SigInEnum'
import signInWithGithub from './signInWithGithub'
import signInWithGoogle from './signInWithGoogle'
import signInWithMicrosoft from './signInWithMicrosoft'

const signInMetod = async (typeSignIn: number) => {
  switch (typeSignIn) {
    case SigInMethodEnum.Google:
      return await signInWithGoogle()
    case SigInMethodEnum.Github:
      return await signInWithGithub()
    case SigInMethodEnum.Microsoft:
      return await signInWithMicrosoft()

    default:
      break
  }
}

export default signInMetod
