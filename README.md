# NOVA+ Site Satellite — Internet Haut Débit 🛰️

Bienvenue sur le code source de l'application fullstack **NOVA+**, le premier fournisseur d'accès internet par orbite basse à Likasi, RD Congo.
Ce projet a été généré en respectant scrupuleusement la charte graphique et le design system "Orbital Horizon" extrait de Stitch.

## 🛠️ Stack Technique

- **Frontend** : React.js (Vite), Tailwind CSS, React Router, Axios, Lucide Icons, Leaflet (carte).
- **Backend** : Node.js, Express, Prisma ORM, PostgreSQL (configurable), JWT, bcrypt.
- **Design System** : "Orbital Horizon" (Glassmorphisme, couleurs spécifiques, police Manrope/Inter).

## 📂 Structure du projet

Le projet est divisé en deux parties principales :
- `frontend/` : Application React gérant les pages publiques, l'espace client et le backoffice admin.
- `backend/` : API REST Node.js/Express gérant la base de données, l'authentification et les simulations de paiements MoMo.

---

## 🚀 Installation & Démarrage Rapide

### 1. Prérequis
- Node.js (v18+)
- PostgreSQL (ou SQLite pour du test rapide via Prisma)

### 2. Démarrer le Backend (API)

```bash
cd backend

# Copiez le fichier d'environnement et configurez la variable DATABASE_URL
cp .env.example .env

# Installez les dépendances
npm install

# Initialisez la base de données et peuplez les données de test (seed)
npm run db:setup

# Si PostgreSQL n'est pas disponible, vous pouvez changer le provider dans schema.prisma en "sqlite"
# et l'URL en "file:./dev.db" avant de lancer db:setup.

# Démarrez le serveur (Mode Dev)
npm run dev
# L'API tourne sur http://localhost:5000
```

### 3. Démarrer le Frontend (UI)

Ouvrez un nouveau terminal :

```bash
cd frontend

# Installez les dépendances
npm install

# Lancez le serveur de développement Vite
npm run dev
# Le site web tourne sur http://localhost:5173
```

---

## 🔐 Comptes de Test par Défaut

Le script de seed (`backend/prisma/seed.js`) génère deux comptes pour tester l'application :

| Rôle | Email | Mot de passe | Accès vers |
|---|---|---|---|
| **Administrateur** | `admin@novaplus.com` | `Admin123!` | `/admin` (Backoffice KPI) |
| **Client** | `test@client.com` | `Test123!` | `/dashboard` (Espace Client) |

---

## ✨ Fonctionnalités Implémentées

### Front-office (Publique)
- **Accueil** : Slogan impactant, avantages, cartes services.
- **Offres** : Pricing cards calquées sur le "no-line rule" de la charte.
- **Couverture** : Carte Leaflet de Likasi et vérificateur d'éligibilité.
- **Comment ça marche** : Schémas et FAQ dynamique.
- **Blog & Support** : Interface d'actualités et système de création de tickets.
- **Revendeurs** : Formulaire de candidature pour les partenaires B2B.

### Espace Client (Privé)
- **Tableau de bord** : Onglets synchronisés.
- **Mon Forfait** : Affichage data et détails d'abonnement.
- **Factures** : Simulation de l'historique.
- **Matériel** : Suivi des étapes d'installation (Timeline verticale).

### Backoffice Admin (Privé)
- **Dashboard** : KPI en temps réel (fictifs sur la démo UI).
- **Tableau Actif** : Liste des derniers abonnements avec statuts.
- **Monitoring** : Composant affichant la "stabilité" simulée du composant satellite.

---
*Projet généré par Antigravity — Construit pour l'excellence et la vitesse.*
