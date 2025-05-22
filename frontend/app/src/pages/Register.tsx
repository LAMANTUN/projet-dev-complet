import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import PageWrapper from '../components/layout/PageWrapper'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleRegister = async () => {
    if (password !== repassword) {
      setMessage('❌ Les mots de passe ne correspondent pas.')
      return
    }

    try {
      await api.post('/auth/users/', {
        email,
        password,
        re_password: repassword,
      })
      setMessage('✅ Compte créé ! Redirection vers vos projets...')
      setTimeout(() => navigate('/projects'), 1500)
    } catch (err: any) {
      console.error(err)
      const errMsg =
        err.response?.data?.email?.[0] ||
        err.response?.data?.password?.[0] ||
        'Erreur inconnue'
      setMessage('❌ ' + errMsg)
    }
  }

  return (
    <PageWrapper>
      <Card>
        <h2 className="text-2xl font-bold mb-4">Créer un compte</h2>

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

        <label className="block text-sm font-medium mt-4 mb-1">Confirmer le mot de passe</label>
        <Input
          type="password"
          placeholder="Confirme le mot de passe"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
        />

        <Button className="w-full mt-6" onClick={handleRegister}>
          S’inscrire
        </Button>

        {message && <p className="text-center mt-4 text-sm">{message}</p>}
      </Card>
    </PageWrapper>
  )
}
