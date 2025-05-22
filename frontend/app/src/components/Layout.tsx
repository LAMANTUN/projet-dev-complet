import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import ThemeToggle from '../components/ThemeToggle'

export default function Layout() {
  const { token, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Switch thème toujours visible en haut à droite */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between px-6 py-4 overflow-hidden">
          <div>
            <h1 className="text-2xl font-bold text-blue-600 mb-8 flex items-center gap-2">
              <span>📁</span> <span>Projet Vitrine</span>
            </h1>

            <h2 className="font-bold text-xl mb-6 dark:text-white">Mon App</h2>

            <nav>
              <ul className="space-y-4 text-sm font-medium text-gray-700 dark:text-gray-200">
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
          </div>
        </aside>

        {/* Contenu */}
        <main className="flex-1 p-8 overflow-y-auto text-gray-900 dark:text-white">

          <Outlet />
        </main>
      </div>
    </div>
  )
}
