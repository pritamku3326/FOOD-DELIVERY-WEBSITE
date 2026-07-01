# ⚙️ Tomato Admin Dashboard

Tomato Admin is a clean, powerful, and responsive admin control panel built with **React** and **Vite**. It provides the store manager with a premium interface to control menus, list food items, change pricing, and track orders in real-time.

---

## 🎨 Design & Layout
* **Premium Theme:** Curated dark sidebar contrast with clean, high-contrast inputs and minimal tables.
* **Component-focused CSS:** All page sections are backed by dedicated CSS files maintaining style consistency.
* **Alert Notifications:** Uses `react-toastify` for sleek toast messages during create, delete, and edit actions.

---

## 🚀 Key Modules

### 1. Add Food Item (`/add`)
Allows admins to insert new food items.
* **Image Upload:** Upload custom food thumbnails using a clean drag-and-drop preview container.
* **Product Parameters:** Inputs for name, description, price, and category (Salad, Rolls, Desert, Sandwich, Cake, Pasta, Noodles, etc.).
* **API Flow:** Submits a `multipart/form-data` request to `POST /api/food/add`.

### 2. Food Inventory List (`/list` w/ Inline Editing)
Admins can view and edit the current menu inventory.
* **Inline Price Editing:** Click on any price item (e.g. `$12 ✎`) to toggle a fast numeric input and edit prices without leaving the page. Saving updates the database instantly via the `/update-price` API.
* **Remove Items:** Instantly delete food items by clicking the **X** button, which triggers the backend file system to clean up the unused image from disk.

### 3. Orders Monitor (`/orders`)
Real-time tracking of customer requests.
* **Detailed breakdown:** Lists address details (street, city, zipcode, phone number), client names, total amount, and item quantities.
* **Live Status Updater:** Interactive drop-down to change order statuses (`Food Processing`, `Out for delivery`, `Delivered`). Changes reflect on the customer's "Track Order" dashboard instantly.

---

## 💻 Tech Stack
* **Vite** (Next-gen frontend tool)
* **React** (v19)
* **Axios** (HTTP Client)
* **React Router DOM** (Client Routing)
* **React Toastify** (Notifications)

---

## ⚙️ Quick Start

1. Ensure the backend server is running on `http://localhost:4000`.
2. Run installation inside the `/admin` folder:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Access the portal at `http://localhost:5174` (or as displayed in your terminal).
