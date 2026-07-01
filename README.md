# 🍅 Tomato - Full-Stack Premium Food Delivery Web Application

Tomato is a state-of-the-art, responsive, full-stack food delivery application. Built with high-fidelity component structures, smooth transitions, and premium modern aesthetics, the project contains dedicated customer-facing and administrative environments, unified by a secure REST API backend.

---

## 🗺️ Project Architecture Overview

This monorepo consists of three distinct modules. Click any module link to view its dedicated, detailed documentation:

1. **🔌 [Tomato API Backend](file:///c:/Users/anjali%20kumari/OneDrive/Desktop/Pritam/foor-del/backend/README.md):** Express & Mongoose REST API server with JWT authentication, file upload capability, database seeding, and Stripe payments checkout.
2. **🍕 [Tomato Customer Frontend](file:///c:/Users/anjali%20kumari/OneDrive/Desktop/Pritam/foor-del/frontend/README.md):** High-performance client portal featuring dynamic menu sliders, persistent cart status, and a real-time order status tracking dashboard.
3. **⚙️ [Tomato Admin Dashboard](file:///c:/Users/anjali%20kumari/OneDrive/Desktop/Pritam/foor-del/admin/README.md):** Management portal enabling administrators to add/remove dishes, edit item pricing inline dynamically, and update processing statuses of customer orders.

---

## 🎨 Technology Stack

* **Frontend:** React (v19) / Vite / HTML5 / CSS3 / Context API (Global State)
* **Backend:** Node.js / Express / Mongoose / MongoDB
* **Libraries:** Axios (HTTP client), JWT (Secure Tokens), Bcrypt (Password Hashing), Multer (Image uploads), Stripe (Payments)
* **Databases:** Local MongoDB Server (Primary) & Cloud MongoDB Atlas Cluster (Fallback)

---

## 🚀 Key Implementations & Enhancements

> [!IMPORTANT]
> **Database Resilience & Fallback Connection**
> In [db.js](file:///c:/Users/anjali%20kumari/OneDrive/Desktop/Pritam/foor-del/backend/config/db.js), the server prioritizes connection to a local MongoDB instance. If the connection fails (e.g. local service not running), it automatically catches the exception and falls back to a cloud MongoDB Atlas connection, keeping your application online.

> [!TIP]
> **Database Seeding Engine (`seed.js`)**
> Run `node seed.js` inside the backend directory to automatically:
> - Clear the existing database.
> - Import **32 unique food items** with descriptive copy, custom categories, distinct prices, and 1-5 star ratings.
> - Copy image files from frontend assets directly into the backend uploads folder.

> [!NOTE]
> **Inline Price Editing**
> We've added an inline price editor in the Admin panel list view. Clicking on a price toggles an input field, which saves modifications directly to the database and propagates changes to the user app instantly.

---

## 📋 Comprehensive Directory Map

```text
├── backend/
│   ├── config/db.js          # MongoDB connection helper (Local/Atlas fallback)
│   ├── controllers/          # Business logic handlers (Auth, Cart, Food, Orders)
│   ├── middleware/auth.js    # JWT authorization middleware
│   ├── models/               # Mongoose schemas (Food, User, Order)
│   ├── routes/               # API endpoint route definition maps
│   ├── uploads/              # Storage folder for uploaded food images
│   ├── seed.js               # DB seeding & asset copier script
│   └── server.js             # Core server listener
│
├── frontend/
│   ├── src/components/       # Customer UI components (Food Items, Navbar, Footer)
│   ├── src/context/          # StoreContext (Global state & cart logic)
│   ├── src/pages/            # Home, Cart, PlaceOrder checkout, Verify payment, MyOrders
│   └── src/assets/           # Assets (Images, Icons)
│
└── admin/
    ├── src/components/       # Admin layouts (Sidebar, Navbar)
    └── src/pages/            # Add Foods, List Inventory (inline edit), Orders control
```

---

## 🛠️ Step-by-Step Installation & Launch

Follow these steps to run all modules concurrently on your local machine:

### 1. Backend Server Setup
```bash
cd backend
npm install
node seed.js        # Seed database and load 32 food png assets
npm run dev         # Launches on http://localhost:4000
```
*Configure your keys (`JWT_SECRET`, `STRIPE_SECRET_KEY`) inside a `.env` file in the `backend/` directory.*

### 2. Admin Portal Setup
```bash
cd ../admin
npm install
npm run dev         # Launches on http://localhost:5174
```

### 3. Customer Web Application Setup
```bash
cd ../frontend
npm install
npm run dev         # Launches on http://localhost:5173
```

---

## 📄 Licensing & Context
Tomato is open-source under the ISC License. Created for premium portfolio presentations and learning purposes.
