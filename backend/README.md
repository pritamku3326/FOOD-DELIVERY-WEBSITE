# 🔌 Tomato API Backend Server

The backend of Tomato is an Express-based Node.js application that manages database structures, authentications, uploads, and checkout payments.

---

## 🛠️ Architecture & Modules

### 1. Database Connection & Schema Fallback (`/config/db.js`)
* Connects seamlessly to a local MongoDB instance.
* Automatically catches connection exceptions and redirects database queries to a cloud MongoDB Atlas cluster if the local database server goes offline.

### 2. User Authentication (`/middleware/auth.js`)
* JSON Web Token (JWT) based route protection.
* Secure password hashing using `bcrypt`.
* Decodes client headers to inject `userId` parameters safely into restricted requests.

### 3. Food Management & Seeding (`/controllers/foodController.js`)
* Multi-part form parsing with `multer` to handle image file storage.
* Deletes files from disk (`uploads/` folder) automatically when food models are removed.
* **Database Seeder (`seed.js`):** Run `node seed.js` to automatically clear the DB, move assets, and insert 32 custom dishes with descriptions and ratings.

### 4. Stripe Checkout Session Flow (`/controllers/orderController.js`)
* Integrates Stripe's `checkout.sessions.create` payment API.
* Handles redirection urls, cart clearing, and order status verification.

---

## 📂 Core Endpoints

| Method | Endpoint | Description | Headers |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | API Working / Health Check | None |
| **POST** | `/api/user/register` | Sign up user account | None |
| **POST** | `/api/user/login` | Authenticate user credentials | None |
| **GET** | `/api/food/list` | Retrieve food menu | None |
| **POST** | `/api/food/add` | (Admin) Create food item | None |
| **POST** | `/api/food/remove` | (Admin) Delete food item | None |
| **POST** | `/api/food/update-price`| (Admin) Edit food price | None |
| **POST** | `/api/cart/add` | Add item to cart | `token` |
| **POST** | `/api/cart/remove` | Remove item from cart | `token` |
| **POST** | `/api/cart/get` | Get active cart items | `token` |
| **POST** | `/api/order/place` | Start order checkout | `token` |
| **POST** | `/api/order/verify` | Verify Stripe checkout | None |
| **POST** | `/api/order/userorders` | Fetch user history | `token` |
| **GET** | `/api/order/list` | (Admin) Get all store orders | None |
| **POST** | `/api/order/status` | (Admin) Update order status | None |

---

## ⚙️ Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up environment variables in a `.env` file:
   ```env
   JWT_SECRET="your_secret_key"
   STRIPE_SECRET_KEY="your_stripe_secret_key"
   ```
3. Run the database seed:
   ```bash
   node seed.js
   ```
4. Start the server:
   ```bash
   npm run dev   # Node.js w/ Nodemon
   # OR
   npm start     # Native Node.js
   ```
5. Server starts up at `http://localhost:4000`.
