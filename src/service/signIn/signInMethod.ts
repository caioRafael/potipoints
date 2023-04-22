import { SigInMethodEnum } from '../../enums/SigInEnum'
import signInWithGithub from './signInWithGithub'
import signInWithGoogle from './signInWithGoogle'
import signInWithMicrosoft from './signInWithMicrosoft'

const signInMetod = (typeSignIn: number) => {
  switch (typeSignIn) {
    case SigInMethodEnum.Google:
      return signInWithGoogle()
    case SigInMethodEnum.Github:
      return signInWithGithub()
    case SigInMethodEnum.Microsoft:
      return signInWithMicrosoft()

    default:
      break
  }
}

export default signInMetod
