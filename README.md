# Vault Q — Research Guidance for Life Science Students

A clean, affordable, trust-focused research support website for Indian students and early-career researchers pursuing MSc / PhD in life sciences.

**Live:** `https://<your-username>.github.io/Vault_Q/`

---

## Features

- **Topic Marketplace** — Browse exclusive research topics. Once purchased, a topic is locked and unavailable to others.
- **UPI Payments (Zero Cost)** — QR code + deep link based UPI payments. No payment gateway fees.
- **Admin Dashboard** — Manage topics (CRUD), verify orders, read contact inquiries.
- **Firebase Backend** — Authentication (Email + Google), Firestore database, all on the free Spark plan.
- **Mobile-First Design** — Responsive, minimalist UI with CSS Modules.
- **GitHub Pages Deployment** — Free hosting with automated CI/CD via GitHub Actions.

## Tech Stack

| Layer      | Technology                      |
| ---------- | ------------------------------- |
| Framework  | React 19 + Vite 7              |
| Routing    | react-router-dom v7 (HashRouter)|
| Backend    | Firebase Spark (Firestore + Auth)|
| Styling    | CSS Modules + CSS Variables     |
| Deployment | GitHub Pages + GitHub Actions   |
| Icons      | react-icons                     |
| Toasts     | react-hot-toast                 |
| QR Codes   | qrcode.react                    |

## Quick Start

```bash
# 1. Clone
git clone https://github.com/<your-username>/Vault_Q.git
cd Vault_Q

# 2. Install
npm install

# 3. Configure environment
cp .env.example .env
# Edit .env with your real Firebase + UPI details

# 4. Start dev server
npm run dev
```

Open `http://localhost:5173/Vault_Q/`

## Firebase Setup

1. Create a project at [Firebase Console](https://console.firebase.google.com)
2. Enable **Authentication** → Sign-in methods: Email/Password + Google
3. Create a **Firestore Database** (start in production mode)
4. Copy your web app config into `.env`
5. Deploy security rules:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase deploy --only firestore:rules,firestore:indexes
   ```

### Set Admin User

```bash
cd scripts
npm install firebase-admin
# Download serviceAccountKey.json from Firebase Console
# Project Settings → Service Accounts → Generate New Private Key
node set-admin.js YOUR_USER_UID
```

### Seed Demo Topics

```bash
cd scripts
node seed-topics.js
```

## Deployment (GitHub Pages)

### Option A: GitHub Actions (Recommended)

1. Push code to the `main` branch
2. Go to **Repository Settings → Pages → Source → GitHub Actions**
3. Add all `VITE_*` environment variables as **Repository Secrets**:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_UPI_ID`
   - `VITE_UPI_NAME`
   - `VITE_WHATSAPP_NUMBER`
   - `VITE_CONTACT_EMAIL`
4. The workflow auto-deploys on every push to `main`

### Option B: Manual Deploy

```bash
npm run build
npm run deploy
```

## Project Structure

```
Vault_Q/
├── public/                  # Static assets
├── scripts/                 # Admin setup & seed scripts
├── src/
│   ├── components/          # Reusable UI components
│   ├── context/             # React context (Auth)
│   ├── data/                # Static data files
│   ├── firebase/            # Firebase config & helpers
│   ├── pages/               # Page components (12 pages)
│   ├── App.jsx              # Root component + routes
│   ├── index.css            # Global styles & design system
│   └── main.jsx             # Entry point
├── firestore.rules          # Firestore security rules
├── firestore.indexes.json   # Composite indexes
├── .env.example             # Environment template
└── .github/workflows/       # CI/CD
```

## Environment Variables

See [.env.example](.env.example) for all required variables.

> **Important:** Never commit `.env` to version control. It's already in `.gitignore`.

## Demo Mode

If Firebase is not configured (no valid env vars), the site runs in **demo mode** with sample topics loaded from local data. This lets you preview the UI without setting up Firebase.

## Academic Honesty

Vault Q provides **research guidance** — topic selection, methodology design, literature strategies, and experimental frameworks. We do **not** write dissertations, fabricate data, or submit work on behalf of students.

## License

MIT
