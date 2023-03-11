import { SiginMethodEnum } from '../../enums/SiginMethodEnum'
import signInWithGithub from './signInWithGithub'
import signInWithGoogle from './signInWithGoogle'

const signInMetod = async (typeSignIn: number) => {
  switch (typeSignIn) {
    case SiginMethodEnum.Google:
      return await signInWithGoogle()
    case SiginMethodEnum.Github:
      return await signInWithGithub()

    default:
      break
  }
}

export default signInMetod
