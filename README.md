# TradeX - Stock Trading Platform

A modern, full-stack stock trading platform built with React, Express.js, and MongoDB. TradeX provides a seamless experience for traders and investors to manage their portfolio, place orders, and track market positions.

![TradeX Logo](frontend/public/media/TradeX.png)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Authentication Flow](#authentication-flow)
- [Project Architecture](#project-architecture)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### Frontend (Landing & Authentication)
- **Landing Page** with hero section, product showcase, and pricing information
- **User Authentication** with signup and login functionality
- **About Section** - Learn more about TradeX and our team
- **Product Universe** - Explore our partner ecosystem (Streak, Sensibull, Smallcase, etc.)
- **Pricing Information** - Transparent brokerage and service fees
- **Support Portal** - Customer support and ticket system
- **Responsive Design** - Mobile-friendly interface with Bootstrap

### Dashboard (Trading Interface)
- **Real-time Holdings** - View your current stock holdings and valuations
- **Order Management** - Place new orders and view order history
- **Position Tracking** - Monitor open and closed positions
- **Watchlist** - Create and manage your personal watchlist
- **Market Indices** - Track NIFTY 50 and SENSEX live
- **Data Visualization** - Interactive charts and graphs using Chart.js
- **User Profile** - Authenticated user display with avatar and initials
- **Responsive Layout** - Optimized for desktop and tablet viewing

### Backend (API & Authentication)
- **JWT Authentication** - Secure token-based authentication
- **HTTP-only Cookies** - Secure credential storage
- **User Management** - Registration, login, and profile management
- **Portfolio Management** - Holdings, orders, and positions endpoints
- **MongoDB Integration** - Persistent data storage
- **CORS Support** - Cross-origin requests between frontend and dashboard
- **RESTful API** - Standard REST conventions

---

## 🛠 Tech Stack

### Frontend
- **React** 19.2.5 - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icon library
- **Chart.js** - Data visualization

### Dashboard
- **React** 19.2.5 - UI library
- **React Router** - Navigation
- **Axios** - HTTP requests
- **Bootstrap 5** - Styling
- **Chart.js** - Charts and graphs

### Backend
- **Express.js** - Web framework
- **Node.js** - Runtime environment
- **MongoDB** - NoSQL database
- **JWT (jsonwebtoken)** - Authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin support
- **dotenv** - Environment variables

---

## 📁 Project Structure

```
tradex/
├── frontend/                 # Landing page & authentication
│   ├── public/
│   │   ├── media/           # Images and logos
│   │   ├── index.html
│   │   └── robots.txt
│   ├── src/
│   │   ├── landing_page/
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── pricing/
│   │   │   ├── products/
│   │   │   ├── support/
│   │   │   └── signup/
│   │   ├── index.css
│   │   └── index.js
│   └── package.json
│
├── dashboard/                # Trading interface
│   ├── public/
│   │   ├── index.html
│   │   ├── logo.png
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Apps.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Menu.js
│   │   │   ├── TopBar.js
│   │   │   ├── Holdings.js
│   │   │   ├── Orders.js
│   │   │   ├── Positions.js
│   │   │   ├── WatchList.js
│   │   │   ├── BuyActionWindow.js
│   │   │   ├── GeneralContext.js
│   │   │   └── Summary.js
│   │   ├── data/
│   │   │   └── data.js
│   │   ├── index.css
│   │   └── index.js
│   └── package.json
│
├── backend/                  # Express API server
│   ├── model/
│   │   ├── UserModel.js
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   ├── schemas/
│   │   ├── UserSchema.js
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   ├── index.js              # Main Express server
│   └── package.json
│
├── package.json              # Root package configuration
├── .gitignore
└── README.md
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** v14+ and **npm** v6+
- **MongoDB** v4.4+ (local or MongoDB Atlas)
- **Git**

### Step 1: Clone the Repository

```bash
git clone https://github.com/Aanjneya-Nayak/TradeX.git
cd TradeX
```

### Step 2: Install Dependencies

Install root dependencies:
```bash
npm install
```

Install frontend dependencies:
```bash
cd frontend
npm install
cd ..
```

Install dashboard dependencies:
```bash
cd dashboard
npm install
cd ..
```

Install backend dependencies:
```bash
cd backend
npm install
cd ..
```

### Step 3: Configure Environment Variables

Create a `.env` file in the `backend` folder:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tradex
JWT_SECRET=your_secret_key_here
PORT=3002
FRONTEND_URL=http://localhost:3000
DASHBOARD_URL=http://localhost:3001
NODE_ENV=development
```

---

## ▶️ Running the Project

### Start All Services

From the root directory:

```bash
# Option 1: Run each service in separate terminals

# Terminal 1 - Backend (Port 3002)
cd backend
npm start

# Terminal 2 - Dashboard (Port 3001)
cd dashboard
npm start

# Terminal 3 - Frontend (Port 3000)
cd frontend
npm start
```

### Access the Applications

- **Frontend (Landing Page):** http://localhost:3000
- **Dashboard (Trading Interface):** http://localhost:3001
- **Backend API:** http://localhost:3002

---

## 📡 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup` | Register a new user |
| POST | `/auth/login` | Login with credentials |
| GET | `/auth/me` | Get authenticated user info |
| POST | `/auth/logout` | Logout current user |

**Example - Signup:**
```bash
POST http://localhost:3002/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

**Example - Login:**
```bash
POST http://localhost:3002/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Portfolio Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/getHoldings` | Get user holdings |
| GET | `/getOrders` | Get user orders |
| GET | `/getPositions` | Get user positions |
| POST | `/newOrder` | Create new order |

**Example - Get Holdings:**
```bash
GET http://localhost:3002/getHoldings
Authorization: Bearer {jwt_token}
```

---

## 🔐 Authentication Flow

1. **User Signup/Login:**
   - User submits credentials on frontend
   - Backend validates and creates JWT token
   - Token stored in HTTP-only cookie (secure, httpOnly flags)

2. **Authenticated Requests:**
   - Frontend/Dashboard include cookie with every request (`withCredentials: true`)
   - Backend validates JWT from cookie
   - Returns user data and protected resources

3. **Cross-Domain Authentication:**
   - Frontend (port 3000) can access Dashboard (port 3001)
   - Both authenticate via Backend (port 3002)
   - HTTP-only cookies enable secure cross-domain sessions

---

## 🏗 Project Architecture

```
┌─────────────────────────────────────────────────────┐
│              Browser/Client                         │
├──────────────────┬──────────────────┬───────────────┤
│   Frontend       │    Dashboard     │   Shared      │
│   (Port 3000)    │    (Port 3001)   │   Auth Cookie │
└────────┬─────────┴────────┬─────────┴───────────────┘
         │                  │
         └──────────┬───────┘
                    │
            HTTP/REST Requests
            (withCredentials: true)
                    │
         ┌──────────▼─────────────┐
         │   Backend API          │
         │   (Port 3002)          │
         │   Express.js Server    │
         └──────────┬─────────────┘
                    │
         MongoDB Database
         (Holdings, Orders,
          Positions, Users)
```

---

## 🎯 Key Features Explained

### Real-time Market Data
- Dashboard displays live market indices (NIFTY 50, SENSEX)
- Holdings show current valuations and profit/loss
- Chart visualization for portfolio performance

### Secure Authentication
- JWT-based token authentication
- HTTP-only cookies prevent XSS attacks
- Session management with automatic logout

### Responsive UI
- Mobile-friendly design with Bootstrap
- Adaptive layouts for different screen sizes
- Font Awesome icons for intuitive navigation

### Data Management
- MongoDB schemas for holdings, orders, positions
- RESTful API for data operations
- State management in React components

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Development Guidelines

### Code Style
- Use ES6+ syntax
- Follow React best practices (hooks, functional components)
- Use meaningful variable and function names
- Add comments for complex logic

### Testing
```bash
# Run tests in frontend
cd frontend
npm test

# Run tests in dashboard
cd dashboard
npm test
```

### Build for Production
```bash
# Frontend build
cd frontend
npm run build

# Dashboard build
cd dashboard
npm run build

# Backend is production-ready as-is
```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💼 Team

**Founder & CEO: Aanjneya Nayak**

Aanjneya is passionate about empowering retail traders and investors through technology and education.

---

## 📞 Support

For support, email support@tradex.com or open an issue in the GitHub repository.

---

## 🔗 Links

- **GitHub Repository:** https://github.com/Aanjneya-Nayak/TradeX
- **Website:** http://localhost:3000 (development)
- **Trading Dashboard:** http://localhost:3001 (development)

---

## 🚀 Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced charting with TradingView integration
- [ ] Options trading support
- [ ] Cryptocurrency trading
- [ ] Automated trading strategies
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Push notifications

---

**Made with ❤️ by TradeX Team**
