import { useEffect, useState } from 'react'
import api from '../api/axios'
import Card from '../components/ui/Card'
import PageWrapper from '../components/layout/PageWrapper'

interface Project {
  id: number
  name: string
  description: string
  created_at: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem('token')
        const res = await api.get<Project[]>('/projects/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setProjects(res.data)
      } catch (err) {
        console.error('Erreur lors du chargement des projets', err)
      }
    }

    fetchProjects()
  }, [])

  return (
    <PageWrapper>
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">📂 Mes Projets</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id}>
              <h3 className="text-xl font-semibold text-blue-600">{project.name}</h3>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                Créé le : {new Date(project.created_at).toLocaleDateString()}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
