import { useState } from 'react'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import PageWrapper from '../components/layout/PageWrapper'

interface LoginResponse {
  access: string
  refresh: string
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await api.post<LoginResponse>('/auth/jwt/create/', {
        email,
        password,
      })
      login(res.data.access)
      navigate('/projects')
    } catch (err) {
      alert('❌ Erreur de connexion')
    }
  }

  return (
    <PageWrapper>
      <Card>
        <h2 className="text-2xl font-bold mb-4">Connexion</h2>

        <label className="block text-sm font-medium mb-1">Adresse e-mail</label>
        <Input
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block text-sm font-medium mt-4 mb-1">Mot de passe</label>
        <Input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button className="w-full mt-6" onClick={handleLogin}>
          Se connecter
        </Button>
      </Card>
    </PageWrapper>
  )
}
