import { useState } from 'react'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import PageWrapper from '../components/layout/PageWrapper'

export default function CreateProject() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      await api.post(
        '/projects/',
        { name, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setMessage('✅ Projet créé !')
      setTimeout(() => navigate('/projects'), 1500)
    } catch (err) {
      setMessage('❌ Erreur lors de la création')
    }
  }

  return (
    <PageWrapper>
      <Card>
        <h2 className="text-xl font-bold mb-4">🆕 Nouveau Projet</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nom du projet</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Nom du projet"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              className="w-full px-3 py-2 border rounded bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Décris ton projet..."
            />
          </div>

          <Button type="submit" className="w-full">Créer</Button>
          {message && (
            <p className="text-sm text-center mt-2">{message}</p>
          )}
        </form>
      </Card>
    </PageWrapper>
  )
}
