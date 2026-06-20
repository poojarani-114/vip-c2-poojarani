# ShopEZ — Project Documentation
## A MERN Stack E-commerce Application for Product Catalog, Cart, and Order Management

---

## 1. Introduction

### 1.1 Project Title
**ShopEZ**

### 1.2 Team Members
| Name | Role |
| :--- | :--- |
| **p.poojarani** | Full Stack Developer (Frontend, Backend, Database, Documentation) |

This is an individually developed project, with the sole contributor responsible for end-to-end design, development, testing, and deployment of the application.

---

## 2. Project Overview

### 2.1 Purpose
**ShopEZ** is a web-based e-commerce platform that allows customers to browse a diverse catalog of products, filter and sort them, manage a virtual shopping cart, and seamlessly checkout to place orders. The application divides functionality between two types of authenticated users: **Customers** (who buy products and manage their profiles/orders) and **Admins** (who manage the product inventory, update the homepage banners/categories, and review system-wide order history).

The goal of the project is to provide a clean, modern, and high-performance digital storefront that replaces legacy or slow shopping experiences with a transparent, responsive MERN-stack architecture.

### 2.2 Key Features

#### User Registration & Profile Management
* **Secure Sign-up**: Customers and admins can register with email, username, and password. Passwords are securely hashed using `bcryptjs` before database insertion.
* **Role Differentiation**: User accounts are tagged with a role (`customer` or `admin`) that dictates which navigation options and dashboard interfaces are visible.

#### Product Catalog & Dynamic Filtering
* **Vibrant Homepage**: Features a premium banner and quick category links (Fashion, Electronics, Mobiles, Groceries, Sports Equipments).
* **Catalog Browsing**: Catalog pages show high-quality images, description snippets, price tags, ratings, and active discounts.
* **Advanced Filters**: Customers can filter products by Category and sort them dynamically by Popularity (Rating), Price (Low to High), Price (High to Low), or Discount Percentage.

#### Shopping Cart Management
* **Persistent Cart**: Logged-in users can add products to their carts, which are persisted to MongoDB.
* **Add/Remove Items**: Users can add items, view subtotal calculations in real-time, and remove products with a single click.

#### Checkout & Order Processing
* **Simple Checkout Form**: Users provide their shipping address and choose from multiple payment options (Cash on Delivery, UPI, Credit/Debit Card, Net Banking).
* **Order Generation**: Placing an order creates a record in the database and automatically clears the customer's cart.

#### Admin Control Panel
* **Product Management**: Admins can view all products, add new products with stock and image links, and delete obsolete inventory items.
* **Store Config**: Admins can customize the storefront homepage banner text/image and manage active shopping categories.
* **Order Monitoring**: Admins can view all customer orders, including detailed lists of purchased items, user profiles, address information, and timestamps.

#### Role-Based Authentication
* **JWT-based Security**: JSON Web Tokens guarantee that requests to protected resources (like cart modifications and placing orders) are authenticated, and admin operations (like adding products or viewing all orders) are strictly authorized.

---

## 3. Architecture

The application follows the MERN stack architecture (MongoDB, Express.js, React, Node.js) in a client-server model.

```mermaid
graph TD
    subgraph Client [React Frontend (Vite)]
        UI[User Interface Components] --> Router[React Router DOM]
        Router --> Context[AuthContext]
        Router --> API[Axios HTTP Client]
    end

    subgraph Server [Express Backend]
        API --> AuthMiddleware[JWT auth middleware]
        AuthMiddleware --> Routes[Express Routes]
        Routes --> Controllers[Controllers]
    end

    subgraph Database [MongoDB]
        Controllers --> Mongoose[Mongoose Schemas]
        Mongoose --> Collections[(MongoDB Collections)]
    end
```

### 3.1 Frontend Architecture (React)
The frontend is built using **React 18** with **Vite** as the fast build tool.
* **Component-based Structure**: Clean, modular components (e.g. `Navbar`, `ProductCard`) are separated from page views (e.g. `Home`, `Products`, `ProductDetails`, `Login`, `Register`, `Cart`, `Checkout`, `Profile`, and `Admin` pages).
* **Routing**: `react-router-dom` handles client-side routing. A nested `Protected` route guard blocks unauthenticated users from visiting `/cart`, `/checkout`, and `/profile`, and blocks non-admin users from accessing `/admin/*` dashboards.
* **State Management**: Built-in `useState` and `useEffect` manage local state. Global user session state is managed via an `AuthContext` (React Context API).
* **API Communication**: `Axios` is pre-configured with request interceptors to automatically append the stored JWT token to the `Authorization` header for all requests.
* **Persistence**: User profiles and token details are cached in `localStorage` to retain the session across page refreshes.

### 3.2 Backend Architecture (Node.js + Express.js)
The backend is a RESTful API built using **Express.js** running on **Node.js**.
* **Layered Design**: Logically divided into Mongoose Models, Middleware (authentication and authorization guards), Controllers (handling core logic), and Route mappings.
* **Security & Encrypted Storage**: Passwords hashed with `bcryptjs` (10 rounds). Route endpoints check token properties and throw `401 Unauthorized` or `403 Forbidden` if validation fails.
* **Cross-Origin Resource Sharing**: The `cors` library enables cross-origin communication between the client port (5173) and server port (5000).

### 3.3 Database (MongoDB)
MongoDB stores all documents across five collections, mapped via Mongoose:

| Collection | Key Fields | Purpose |
| :--- | :--- | :--- |
| **users** | `username`, `email`, `password`, `userType` | Stores account details and role (`customer` or `admin`) |
| **products** | `name`, `description`, `price`, `discount`, `category`, `image`, `stock`, `rating` | Stores inventory details, prices, stock level, and category |
| **cart** | `userId`, `items: [{productId, quantity}]` | Keeps track of items currently saved in a user's shopping cart |
| **orders** | `userId`, `items: [{productId, name, price, quantity}]`, `totalAmount`, `address`, `paymentMethod`, `status` | Contains final placed orders, tracking payment method and delivery address |
| **admins** | `banner`, `categories` | Customizes site-wide configuration (hero banner and category list) |

#### Relationships
* **User to Cart/Order**: One-to-one (User to Cart) and One-to-many (User to Orders).
* **Cart/Order to Product**: Many-to-many relationship through populated `productId` references.

---

## 4. Setup Instructions

### 4.1 Prerequisites
* **Node.js** (v18 or higher) and **npm** installed.
* **MongoDB** running locally (via MongoDB Community Server/Compass) or an active MongoDB Atlas cluster URL.

### 4.2 Installation Steps
1. Navigate into the project folder:
   ```bash
   cd ShopEZ
   ```
2. Install backend dependencies and create env file:
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file inside `server/` with the following variables:
   ```env
   MONGO_URI=mongodb://localhost:27017/shopez
   PORT=5000
   JWT_SECRET=supersecretkey
   ```
3. Install frontend dependencies:
   ```bash
   cd ../client
   npm install
   ```

---

## 5. Folder Structure

### 5.1 Client (Frontend) Structure
```
client/
  src/
    components/
      Navbar.jsx          - Responsive header navigation & search bar
      ProductCard.jsx     - Card display for products in catalogs
    context/
      AuthContext.jsx     - Manages user login, logout, and localStorage tokens
    pages/
      AdminDashboard.jsx  - Admin landing panel
      AdminNewProduct.jsx - Product creator page
      AdminOrders.jsx     - List of all customer orders in the system
      AdminProducts.jsx   - Product inventory manager
      Cart.jsx            - Shopping cart list
      Checkout.jsx        - Shipping details and payment choices
      Home.jsx            - Dynamic banner, categories, and top products
      Login.jsx           - Secure customer/admin login
      ProductDetails.jsx  - Full details, reviews, and add-to-cart buttons
      Products.jsx        - Paginated product catalog with sidebar filters
      Profile.jsx         - Customer order history page
      Register.jsx        - Account registration form
    App.jsx               - Router setup & protected paths
    api.js                - Axios instance with JWT interceptor
    main.jsx              - React DOM entrypoint
    styles.css            - Core design system, color tokens, and components
```

### 5.2 Server (Backend) Structure
```
server/
  controllers/
    adminController.js    - Admin settings controllers
    authController.js     - Registration and JWT generation controllers
    cartController.js     - Cart CRUD logic
    orderController.js    - Checkout and order lookup controllers
    productController.js  - Product catalog CRUD controllers
  data/
    product.js            - Seeding datasets
    seed.js               - MongoDB seed runner script
  middleware/
    auth.js               - Token validation & admin protection middleware
  models/
    Schema.js             - Single file exporting User, Admin, Product, Order, and Cart Schemas
  routes/
    adminRoutes.js        - Admin configuration endpoints
    authRoutes.js         - Registration/login endpoints
    cartRoutes.js         - Cart manipulation routes
    orderRoutes.js        - Order management routes
    productRoutes.js      - Inventory management routes
  server.js               - Entry point, express initialization, db connection
```

---

## 6. Running the Application

### 6.1 Database Seeding (Optional)
To populate the database with mock products (Mobiles, Electronics, Fashion, etc.) before running:
```bash
cd server
node data/seed.js
```

### 6.2 Start the Backend API Server
```bash
cd server
npm run dev
```
The server starts on http://localhost:5000 and connects to MongoDB.

### 6.3 Start the Frontend Client
```bash
cd client
npm run dev
```
Open http://localhost:5173 in your browser to interact with the application.

---

## 7. API Documentation

All routes are prefixed with `/api`. Protected endpoints require an `Authorization` header containing `Bearer <token>`.

### 7.1 Authentication Routes — `/api/auth`
| Method | Endpoint | Description | Request Body | Access |
| :--- | :--- | :--- | :--- | :--- |
| **POST** | `/register` | Create a new user account | `username`, `email`, `password`, `userType` | Public |
| **POST** | `/login` | Authenticate credentials and return JWT | `email`, `password` | Public |

### 7.2 Product Routes — `/api/products`
| Method | Endpoint | Description | Request Body | Access |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/` | Retrieve all products (supports query params `category`, `sort`) | None | Public |
| **GET** | `/:id` | Fetch specific product detail | None | Public |
| **POST** | `/` | Create a new product listing | Product details object | Admin only |
| **DELETE**| `/:id` | Delete product listing from database | None | Admin only |

### 7.3 Cart Routes — `/api/cart`
| Method | Endpoint | Description | Request Body | Access |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/` | Fetch the current logged-in user's cart | None | Customer |
| **POST** | `/` | Add an item to the cart or increment quantity | `productId`, `quantity` | Customer |
| **DELETE**| `/:productId` | Remove a product entirely from the user's cart | None | Customer |

### 7.4 Order Routes — `/api/orders`
| Method | Endpoint | Description | Request Body | Access |
| :--- | :--- | :--- | :--- | :--- |
| **POST** | `/` | Submit shipping info, clear cart, place order | `items`, `totalAmount`, `address`, `paymentMethod` | Customer |
| **GET** | `/me` | Retrieve the logged-in customer's order history | None | Customer |
| **GET** | `/` | Fetch all orders in the system | None | Admin only |

### 7.5 Admin Config Routes — `/api/admin`
| Method | Endpoint | Description | Request Body | Access |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/` | Retrieve global banner and category configuration | None | Public |
| **PUT** | `/` | Update the global banner and category configuration | `banner`, `categories` | Admin only |

---

## 8. Authentication & Authorization

### 8.1 JWT Workflow
1. **Hashing**: Passwords are encrypted before database save using `bcryptjs` (salt rounds = 10).
2. **Token Generation**: On successful login or registration, the backend signs a JSON Web Token with `JWT_SECRET` containing the user's database `id`, `username`, and `userType`.
3. **Storage & Headers**: The frontend captures this token in `localStorage`. React's Axios helper appends the token in the `Authorization: Bearer <token>` header for subsequent requests.
4. **Middleware Verification**: The custom backend middleware (`middleware/auth.js`) intercepts private endpoints, extracts the token, verifies the signature, and appends the decoded payload to the `req.user` object.

### 8.2 Authorization Enforcement
* **Admin Restriction**: Routes like `GET /api/orders` or `POST /api/products` execute `adminOnly` middleware checking if `req.user.userType === 'admin'`. If false, a `403 Forbidden` response is returned.
* **Customer Isolation**: Users can only see and manipulate their own carts/orders since database queries utilize the ID extracted from the authenticated JWT (`req.user.id`).

---

## 9. User Interface Flow

### 9.1 Login & Registration
* Dual-purpose sign-up allowing selection of **Customer** or **Admin** status.
* Login routes users dynamically: Admins are navigated to the `/admin` panel while Customers land on the `/` shopping catalog.

### 9.2 Product Catalog & Details
* Simple navigation categories linking to filtered listings.
* Catalog supports live sorting by price and discount with rating badges.
* Detailed product page showcasing stock status, descriptions, and dynamic buy buttons.

### 9.3 Shopping Cart & Checkout
* Live calculation of subtotal based on item quantities.
* Checkout step collecting shipping coordinates and verifying order values.

### 9.4 Profile & Order History
* User dashboard showing a timeline of current and historic orders.

### 9.5 Admin Console
* Overview layout containing options to create new inventory, check current customer purchases, and manage stock counts.

---

## 10. Testing

### 10.1 Testing Approach
* **Manual UI Verification**: Comprehensive browser walkthroughs testing the signup-to-checkout pipelines.
* **API Validation**: Directly verifying API endpoint statuses (200, 201, 400, 401, 403) and responses.
* **Database Inspection**: Using MongoDB Compass to check state changes in collections during checkout or cart operations.

### 10.2 Tools Used
* Chrome Developer Tools (Network + Console tabs).
* MongoDB Compass GUI.

---

## 11. Known Issues
* **Loose Form Validation**: Form fields (e.g. pincode, phone number, image URLs) do not enforce strict format validation on the frontend or backend.
* **Static Config Limits**: Standard customers are unable to leave ratings/reviews in the database, rating is statically seeded.
* **Image Uploads**: Admins must link to external images since in-app file uploads are not supported yet.

---

## 12. Future Enhancements
* **Payment Gateway Integration**: Integrating Razorpay or Stripe for actual monetary transactions.
* **File Uploads**: Using `multer` with AWS S3/Cloudinary to allow product image uploads.
* **Review/Rating System**: Allowing verified buyers to submit product feedback.
* **Analytics Panel**: Charts (e.g. sales trends, top-selling items) for the Admin Dashboard.
