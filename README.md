# 🍅 Tomato - Premium Food Delivery Web Application

Tomato is a full-stack, state-of-the-art food delivery web application built with modern web technologies. The project is organized as a monorepo containing three primary modules: the Customer-facing Frontend, the Admin Control Panel, and a robust Express-based REST API Backend.

---

## 🚀 Key Features

### 🌟 Recently Implemented & Optimized
1. **Robust Database Connection Fallback:** The backend dynamically prioritizes connection to a local MongoDB server (`mongodb://127.0.0.1:27017/food-del`) for reliable local operations, gracefully falling back to a cloud MongoDB Atlas cluster if needed.
2. **Database Seeding Engine (`seed.js`):** A custom seeding script that automatically copies food assets from frontend assets to the backend uploads directory and populates the database with **32 unique food items**, complete with custom pricing, distinct categories, realistic star ratings, and individual, delicious descriptions.
3. **Dynamic Star Ratings (No Static Images):** Individual star ratings (1-5 stars) are rendered dynamically in the frontend UI using pure inline CSS/SVG-like symbols (★) mapped from the database.
4. **Admin Inline Price Editor:** Admins can now edit food prices inline directly inside the Admin Food List view. Clicking on a price toggles an editor input, and saving updates it in the database and reflects instantly in the customer app.
5. **NPM Script Shortcuts:** Added new scripts (`npm run dev`, `npm start`) to the backend environment for streamlined development.

---

## 📁 Repository Structure

```text
├── backend/                  # Node.js + Express REST API Server
│   ├── config/               # Database configurations
│   ├── controllers/          # Business logic handlers
│   ├── middleware/           # Auth and error middlewares
│   ├── models/               # Mongoose schemas (Food, User, Order)
│   ├── routes/               # API endpoints routing
│   ├── uploads/              # Static directory serving food images
│   ├── seed.js               # Database population & asset copying engine
│   └── server.js             # API entrypoint
│
├── frontend/                 # Customer-facing React Application (Vite)
│   ├── src/
│   │   ├── components/       # Layouts, Navbar, Footer, Popups, food cards
│   │   ├── context/          # StoreContext (Global state & cart logic)
│   │   ├── pages/            # Home, Cart, PlaceOrder, Verify, MyOrders
│   │   └── assets/           # UI elements & food assets
│
└── admin/                    # Admin Dashboard Panel (Vite)
    ├── src/
    │   ├── components/       # Sidebar, Navbar
    │   └── pages/            # Add Food, List Foods (w/ inline edit), Orders
```

---

## 🛠️ Getting Started

Follow these steps to set up and run the application locally on your system.

### Prerequisites
* **Node.js** (v18 or higher recommended)
* **MongoDB Server** installed and running locally on port `27017` (Optional: MongoDB Atlas URI)

---

### Step 1: Backend Setup
1. Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Configure environment variables. Create a `.env` file in the `backend/` folder:
   ```env
   JWT_SECRET="your_random_secret_token"
   STRIPE_SECRET_KEY="your_stripe_test_secret_key"
   ```
3. **Seed the database** (This will import the 32 food items, distinct descriptions, ratings, and copy all image files to the server uploads folder):
   ```bash
   node seed.js
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The backend will run on `http://localhost:4000`.*

---

### Step 2: Admin Dashboard Setup
1. Navigate to the admin directory and install dependencies:
   ```bash
   cd ../admin
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   *The admin panel will run on `http://localhost:5174` (or the port specified by Vite).*

---

### Step 3: Customer Frontend Setup
1. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
2. Start the customer web application:
   ```bash
   npm run dev
   ```
   *The customer app will run on `http://localhost:5173`.*

---

## 🔌 API Documentation

All routes are prefixed with the backend URL (`http://localhost:4000`).

### Food Routes (`/api/food`)
* `GET /list` - Retrieves all food items from the database.
* `POST /add` - Adds a new food item (Accepts multipart/form-data for image uploads).
* `POST /remove` - Deletes a food item and removes its associated file.
* `POST /update-price` - Updates the price of an existing food item `{ id, price }`.

### User & Auth Routes (`/api/user`)
* `POST /register` - Registers a new user. Expects `{ name, email, password }`.
* `POST /login` - Log in a user. Expects `{ email, password }`. Returns a JWT.

### Cart Routes (`/api/cart`) - *Requires `token` header*
* `POST /get` - Fetches the user's active cart.
* `POST /add` - Adds an item to the cart. `{ itemId }`.
* `POST /remove` - Decrements or removes an item from the cart. `{ itemId }`.

### Order Routes (`/api/order`) - *Requires `token` header*
* `POST /place` - Places an order and starts a Stripe Checkout Session. `{ address, items, amount }`.
* `POST /verify` - Verifies Stripe payment status. `{ orderId, success }`.
* `POST /userorders` - Lists orders placed by the current user.
* `GET /list` - (Admin) Lists all orders placed on the system.
* `POST /status` - (Admin) Updates the processing status of an order. `{ orderId, status }`.

---

## 🛡️ License
This project is licensed under the ISC License.
