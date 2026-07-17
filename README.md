# MyPakistanDiary-Web
My Pakistan Travel Diary - Web Frontend (V5)

A modern React web application for sharing travel experiences and mental wellness journeys across Pakistan. Part of the full-stack "My Pakistan Travel Diary" ecosystem.

🌐 Features:
- User authentication (Register/Login with JWT)
- Personal travel entry dashboard
- Real-time mood tracking (Peaceful, Joyful, Reflective, Nostalgic, Energized, Anxious)
- Travel memory management (Add, view, delete entries)
- Community entry discovery
- Responsive design with Tailwind CSS
- Pakistan green theme (#0A6B3F)
- Protected routes with authentication guards

🏗️ Architecture:
Frontend (React V5) → Backend API (Node.js V4) → Database (MongoDB)

🛠️ Tech Stack:
- React 18+ with React Router
- Tailwind CSS for styling
- Axios for API calls
- Context API for state management
- Leaflet & React-Leaflet for maps
- Chart.js for mood analytics

📱 Pages:
- /login - User login with email & password
- /register - New user registration with university
- /dashboard - Personal dashboard with travel entries
- /cities - Browse entries by city
- /moods - View mood distribution & wisdom of crowds

🔗 Ecosystem:
- Desktop App: C++/SFML (V1-V3)
- Backend API: Node.js/Express (V4)
- Web Frontend: React (V5) ← You are here
- Live Website: GitHub Pages (Tourism site)

🎯 Purpose:
Transform travel documentation into a gateway for emotional connection and peer support among Pakistani university students. Combat mental health stigma through shared experiences.

🚀 Getting Started:

Prerequisites:
- Node.js 16+
- V4 Backend running on localhost:5000

Installation:
```bash
npm install
npm start
```

The app runs on http://localhost:3000

📚 Environment Setup:
V4 Backend must be running for API calls to work:
```bash
cd ../MyPakistanDiary-Backend
npm run dev
```

🔐 Authentication:
Uses JWT tokens stored in localStorage. Register a new account or login to access dashboard.

📊 Data Model:
Entries include:
- Place name, city, date
- Personal description
- Mood tag (6 options)
- Rating (1-5 stars)
- Status (Visited/Planned)
- Photo support

🌍 Mental Health Integration:
- Pre-trip wellness questionnaire
- Mood tracking across destinations
- Community support resources
- Umang helpline integration (0317-4288665)

📖 Related Repositories:
- MyPakistanDiary - Desktop app (C++/SFML)
- MyPakistanDiary-Backend - REST API (Node.js/Express)
- MyPakistanDiary-Website - Static tourism site (HTML/CSS)

🎓 Built by: Muhammad Maaz Gul (FAST-NUCES)
📚 Portfolio Project - Data Science Program

💡 Contributing:
This is an open-source project. Contributions welcome for:
- UI/UX improvements
- Additional features
- Bug fixes
- Translations
- University partnerships

📝 License: MIT

🙏 Mental Health Resources:
If you or someone you know needs support:
- Umang Helpline: 0317-4288665
- findahelpline.com

Built with ❤️ for a healthier, more connected Pakistan.
