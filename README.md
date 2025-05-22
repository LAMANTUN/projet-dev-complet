# Projet Vitrine Full-Stack 🧩

Ce projet est une vitrine web full-stack développée avec :

- 🐍 **Django 4.2** (API sécurisée avec JWT via Djoser)
- 🐘 **PostgreSQL 15** (base de données relationnelle)
- ⚛️ **React 19** + **Vite** (frontend rapide et moderne)
- 🎨 **Tailwind CSS 3.4** (design responsive)
- 🐳 **100% Dockerisé** (multi-services avec docker-compose)

---

## 🚀 Démarrage rapide

> Prérequis : [Docker Desktop](https://www.docker.com/products/docker-desktop) installé

### 1. Clonez le projet ou téléchargez-le
```bash
git clone https://github.com/LAMANTUN/projet-dev-complet.git
cd projet-dev-complet
```

### 2. Lancez tous les services (backend + db + frontend + nginx)
```bash
docker-compose up --build
```

### 3. Accédez à l'application

- 🌐 Frontend : http://localhost:5173
- 🔐 API Django : http://localhost:8000/api/
- 🐘 Base de données : PostgreSQL (via le service `db`)

---

## 📂 Structure du projet

```bash
projet-dev-complet/
├── backend/
│   └── django_api/     # Backend Django + API
├── frontend/
│   └── app/            # Frontend React + Vite
├── docker/
│   └── nginx/          # Config Nginx
├── docker-compose.yml  # Stack multi-services
```

---

## 🔐 Authentification (JWT via Djoser)

- Inscription : `POST /api/auth/users/`
- Connexion : `POST /api/auth/jwt/create/`
- Accès sécurisé aux projets : `GET /api/projects/` avec Bearer Token

---

## 🛠️ Technologies utilisées

| Outil         | Version     |
|---------------|-------------|
| Python        | 3.11        |
| Django        | 4.2         |
| PostgreSQL    | 15          |
| React         | 19.1        |
| Vite          | 6.3.5       |
| Tailwind CSS  | 3.4.1       |
| Docker        | 24+         |

---

## 📄 Licence

Projet personnel sous licence MIT ou usage libre pour démonstration.
