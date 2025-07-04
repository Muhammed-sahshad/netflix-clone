# Netflix Clone 🎬

A Netflix-inspired web app built using **ReactJS** and **Vite**. It features dynamic movie data fetched from **The Movie Database (TMDb) API**, video playback with **react-youtube**, and backend integration via **Firebase**. The project delivers a responsive, modern UI with fast performance and modular components.

---

## 🚀 Features

- 🎬 Browse trending and categorized movies using TMDb API
- ▶️ Watch trailers directly within the app via YouTube player
- 🔐 Firebase setup for backend services (auth, storage, etc.)
- ⚡ Built with Vite for blazing-fast development
- 🔄 Dynamic content rendering using native **fetch** API
- 📱 Responsive Netflix-style UI

---

## 🔗 APIs and Services Used

- [TMDb API](https://www.themoviedb.org/documentation/api) — for fetching movie data  
- [Firebase](https://firebase.google.com/) — for backend (authentication, Firestore, storage, etc.)
- [YouTube IFrame API](https://developers.google.com/youtube/iframe_api_reference) via `react-youtube`

---

## 🔐 Environment Variables

Create a `.env` file in the root of your project and add the following values:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

VITE_TMDB_BEARER_TOKEN=your_tmdb_bearer_token


## 🛠️ Tech Stack
Frontend: React + Vite

API: TMDb API

Backend: Firebase (Firestore, Auth, Storage)

Utilities: native fetch, react-youtube

Styling: CSS / SCSS

# Clone the repository
git clone https://github.com/your-username/netflix-clone.git

# Navigate into the project folder
cd netflix-clone

# Install dependencies
npm install

# Create a .env file and add your Firebase & TMDb credentials

# Start development server
npm run dev
