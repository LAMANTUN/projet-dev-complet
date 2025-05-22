import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const getInitialTheme = (): 'light' | 'dark' => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={toggleTheme}
        className={`relative w-20 h-10 flex items-center rounded-full p-1 transition-all duration-300
          ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}
        `}
      >
        <div
          className={`absolute top-1 left-1 w-8 h-8 rounded-full shadow-md flex items-center justify-center transition-all duration-300
            ${theme === 'dark' ? 'translate-x-10 bg-gray-100 text-gray-900' : 'translate-x-0 bg-white text-yellow-500'}
          `}
        >
          {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
        </div>
      </button>
    </div>
  )
}
