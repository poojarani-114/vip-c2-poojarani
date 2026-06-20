# ShopEZ — MERN E-commerce Application

A full-stack e-commerce app built with **MongoDB, Express, React (Vite), and Node.js**, following the MVC pattern as described in the ShopEZ project document.

## Project Structure
```
ShopEZ/
├── client/       # React + Vite frontend
└── server/       # Express + Mongoose backend
```

## Features
- User & Admin registration / login (JWT auth)
- Product catalog with filters (category, sort by price/popular/discount)
- Cart (add / remove / quantity)
- Checkout with address + payment method → creates Order
- User profile with order history
- Admin dashboard: manage products (add/delete), view all orders, manage banner & categories

## Tech Stack
- **Frontend:** React 18, Vite, React Router, Axios, Context API
- **Backend:** Node.js, Express.js, Mongoose, JWT, bcryptjs, CORS, dotenv
- **Database:** MongoDB

---

## Setup

### 1. Server
```bash
cd server
npm install
# create .env (see below)
npm run dev
```
`.env` (inside `server/`):
```
MONGO_URI=mongodb://localhost:27017/shopez
JWT_SECRET=supersecretkey
PORT=5000
```

### 2. Client
```bash
cd client
npm install
npm run dev
```
Client runs at http://localhost:5173, API at http://localhost:5000.

---

## API Routes
| Method | Endpoint                     | Description                  | Auth     |
|--------|------------------------------|------------------------------|----------|
| POST   | /api/auth/register           | Register user/admin          | Public   |
| POST   | /api/auth/login              | Login                        | Public   |
| GET    | /api/products                | List products (?category=…)  | Public   |
| GET    | /api/products/:id            | Product details              | Public   |
| POST   | /api/products                | Add product                  | Admin    |
| DELETE | /api/products/:id            | Delete product               | Admin    |
| GET    | /api/cart                    | Get user cart                | User     |
| POST   | /api/cart                    | Add to cart                  | User     |
| DELETE | /api/cart/:productId         | Remove from cart             | User     |
| POST   | /api/orders                  | Place order                  | User     |
| GET    | /api/orders/me               | My orders                    | User     |
| GET    | /api/orders                  | All orders                   | Admin    |
| GET    | /api/admin                   | Get banner + categories      | Public   |
| PUT    | /api/admin                   | Update banner + categories   | Admin    |
