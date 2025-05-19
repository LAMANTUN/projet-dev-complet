import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Layout() {
  const { token, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-8 flex items-center gap-2">
          <span>📁</span> <span>Projet Vitrine</span>
        </h1>
        <nav>
          <ul className="space-y-4 text-sm font-medium text-gray-700">
            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-blue-500">
                🏠 Accueil
              </Link>
            </li>

            {!token && (
              <>
                <li>
                  <Link to="/login" className="flex items-center gap-2 hover:text-blue-500">
                    🔐 Connexion
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="flex items-center gap-2 hover:text-blue-500">
                    📝 Inscription
                  </Link>
                </li>
              </>
            )}

            {token && (
              <>
                <li>
                  <Link to="/projects" className="flex items-center gap-2 hover:text-blue-500">
                    📂 Mes projets
                  </Link>
                </li>
                <li>
                  <Link to="/create" className="flex items-center gap-2 hover:text-blue-500">
                    ➕ Nouveau projet
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-600 hover:underline"
                  >
                    🚪 Déconnexion
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>

      {/* Contenu */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
