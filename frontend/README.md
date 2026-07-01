# 🍕 Tomato Customer Web Application

Tomato is a customer-facing food ordering web application designed with modern user experience practices. The application features sleek layouts, responsive designs, and smooth transitions that make ordering food simple, fast, and enjoyable.

---

## ✨ Features & Capabilities

### 🛍️ Menu Browser & Search
* Browse foods by scrollable categories (Salad, Rolls, Desert, Sandwich, Cake, Pure Veg, Pasta, Noodles).
* Smooth scroll navigation to sections on home page.

### 🌟 Dynamic Star Ratings
* Displays dynamic 1-5 star ratings (★) fetched from the backend database on every food card, giving users real-time quality insights.

### 🛒 Real-time Cart Management
* Fast click addition/subtraction.
* Dynamically computed Subtotals and Delivery Fees.
* Automatically syncs with local storage token to keep cart data consistent across page reloads.

### 💳 Stripe Payments Checkout
* Secure payment flow integrated with Stripe.
* Redirects to Stripe Checkout and handles redirection parameters via a custom loader `/verify` endpoint.

### 📦 Order Tracking Dashboard (`/myorders`)
* Users can view their historical and active orders.
* "Track Order" button to ping the server and retrieve real-time preparation status changes made by the administrator.

---

## 💻 Tech Stack
* **Vite** (Build Tool)
* **React** (Component Library)
* **React Router DOM** (Single Page App Routing)
* **Axios** (API Calls)
* **React Context API** (Global state management)

---

## ⚙️ Quick Start

1. Ensure the API Backend is running on `http://localhost:4000`.
2. Run installation inside the `/frontend` folder:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm run dev
   ```
4. Access the web app in your browser at `http://localhost:5173`.
