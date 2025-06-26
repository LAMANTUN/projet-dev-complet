# Projet Vitrine Full-Stack 🧩

## 📝 Résumé du projet

Ce projet est une application web complète qui sert de vitrine pour présenter des réalisations ou des services. Il combine un backend robuste en Django (API sécurisée), une base de données PostgreSQL, et un frontend moderne en React avec Tailwind CSS. L'ensemble est orchestré via Docker pour faciliter le déploiement et la gestion des services. Idéal pour apprendre ou démontrer une architecture full-stack professionnelle.

### ⚙️ Fonctionnalités principales

- Présentation de projets ou services via une interface web moderne
- Authentification sécurisée par JWT (inscription, connexion, gestion de sessions)
- Tableau de bord pour gérer les projets (CRUD : création, lecture, mise à jour, suppression)
- API RESTful pour l'accès et la gestion des données
- Interface responsive adaptée aux mobiles et tablettes
- Séparation claire frontend/backend pour faciliter la maintenance
- Déploiement simplifié grâce à Docker et docker-compose
- Sécurisation des routes et des accès aux données utilisateurs
- Documentation de l'API intégrée (ex: via Swagger ou DRF)
- Gestion des erreurs et notifications utilisateur
- Configuration Nginx pour servir le frontend et proxy les requêtes API

### 🧑‍💻 Stack technique

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
