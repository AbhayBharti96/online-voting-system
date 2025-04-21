# 🗳️ Online Voting System

A full-stack online voting system where users can register, log in, vote once, and view live results.

## 🚀 Features
- User registration & login
- One vote per user
- Real-time results
- Simple UI with HTML, CSS
- REST API with Node.js, Express.js
- MongoDB for backend database

## 🛠️ Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js + Express.js
- Database: MongoDB + Mongoose

## 📁 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/online-voting-system.git
cd online-voting-system
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```
MONGO_URI=mongodb://localhost:27017/online_voting
```

Then run the server:

```bash
npm start
```

### 3. Frontend
Just open `client/index.html` in your browser.

## ✅ Future Enhancements
- JWT authentication
- Admin panel for managing elections
- Candidate creation from UI
- Email/OTP verification

## 📄 License
MIT License
