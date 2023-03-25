import { FirebaseOptions, initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  OAuthProvider,
} from 'firebase/auth'
import { getDatabase } from '@firebase/database'

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const database = getDatabase(app)

const auth = getAuth()
const provider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const microsoftProvider = new OAuthProvider('microsoft.com')

export {
  app,
  // analytics,
  auth,
  provider,
  database,
  githubProvider,
  microsoftProvider,
}
