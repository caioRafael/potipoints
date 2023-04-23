import { useContext } from 'react'
import { AuthContext } from '../context/auth'

export function useAuth() {
  const value = useContext(AuthContext)

  return value
}
