import { SiginMethodEnum } from '../../enums/SiginMethodEnum'
import signInWithGithub from './signInWithGithub'
import signInWithGoogle from './signInWithGoogle'
import signInWithMicrosoft from './signInWithMicrosoft'

const signInMetod = async (typeSignIn: number) => {
  switch (typeSignIn) {
    case SiginMethodEnum.Google:
      return await signInWithGoogle()
    case SiginMethodEnum.Github:
      return await signInWithGithub()
    case SiginMethodEnum.Microsoft:
      return await signInWithMicrosoft()

    default:
      break
  }
}

export default signInMetod
