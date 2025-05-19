import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Register from './pages/Register'
import Projects from './pages/Projects'
import { AuthProvider } from './context/AuthContext'
import RequireAuth from './routes/RequireAuth'
import Layout from './components/Layout'
import './index.css'
import CreateProject from './pages/CreateProject'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="projects" element={<RequireAuth><Projects /></RequireAuth>} />
            <Route path="/create" element={<RequireAuth><CreateProject /></RequireAuth>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
