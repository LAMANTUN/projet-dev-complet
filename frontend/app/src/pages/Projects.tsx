import { useEffect, useState } from 'react'
import api from '../api/axios'

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
    <div>
      <h2 className="text-2xl font-bold mb-6">📂 Mes Projets</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded shadow p-4 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">{project.name}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <p className="text-sm text-gray-400 mt-4">Créé le : {new Date(project.created_at).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
