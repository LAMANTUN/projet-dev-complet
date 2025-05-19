interface LoginResponse {
  access: string
  refresh: string
}

import { useState } from 'react'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = async () => {
    try {
      const res = await api.post<LoginResponse>('/auth/jwt/create/', {
        username,
        password
      })
      login(res.data.access)

      navigate('/projects')
    } catch (err) {
      alert('Erreur de connexion')
    }
  }

  return (
    <div>
      <h2>Connexion</h2>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Nom d'utilisateur" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  )
}
