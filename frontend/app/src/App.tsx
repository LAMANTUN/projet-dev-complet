import { useEffect, useState } from "react"
import api from "./api/axios"

function App() {
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    api.get("/")
      .then((res) => setMessage(JSON.stringify(res.data)))
      .catch((err) => setError("Erreur : " + err.message))
  }, [])
  return (
    <div className="bg-red-500 text-white text-2xl p-10">
      TAILWIND ACTIF 🔥
    </div>
  )

  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 bg-white rounded shadow-md text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">🎓 Projet Vitrine Full-Stack</h1>

      <div className="bg-green-100 text-green-700 border border-green-300 rounded p-4 mb-4">
        ✅ Tailwind CSS fonctionne parfaitement !
      </div>

      {error ? (
        <div className="bg-red-100 text-red-700 border border-red-300 p-4 rounded">
          <p className="font-medium">Erreur :</p>
          <p>{error}</p>
        </div>
      ) : (
        <div className="bg-gray-100 border border-gray-200 p-4 rounded">
          <p className="font-medium mb-2">Réponse backend :</p>
          <code className="block text-sm text-gray-600 whitespace-pre-wrap">{message || "Chargement..."}</code>
        </div>
      )}
    </div>
  )
}

export default App
