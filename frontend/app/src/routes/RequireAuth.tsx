
import type { JSX } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const { token } = useAuth()

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return children
}
