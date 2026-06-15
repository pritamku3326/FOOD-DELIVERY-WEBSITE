# Food Delivery App

This repository contains a full-stack food delivery application with three separate projects:

- `backend` — Express + MongoDB API server
- `frontend` — React customer-facing website
- `admin` — React admin dashboard

## Project Structure

- `backend/`
  - `server.js` — Express server entrypoint
  - `routes/` — API route definitions
  - `controllers/` — request handlers and business logic
  - `models/` — Mongoose schemas
  - `config/db.js` — MongoDB connection helper
  - `uploads/` — static folder for uploaded images

- `frontend/`
  - `src/` — customer React app source
  - `src/components/` — UI components and pages
  - `src/context/StoreContext.jsx` — global state / store context

- `admin/`
  - `src/` — admin React app source
  - `src/components/` — admin UI components and pages

## Getting Started

> Install dependencies separately in each project folder.

### 1. Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with any required environment variables. Example values may include:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the API server:

```bash
npm run server
```

The backend runs on `http://localhost:4000` and exposes routes such as:

- `GET /` — health check
- `POST /api/user` — user signup / login endpoints
- `GET /api/food` — food item endpoints
- `POST /api/cart` — cart endpoints
- `POST /api/order` — order endpoints

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the local Vite URL shown in the terminal to use the customer-facing app.

### 3. Admin Dashboard

```bash
cd admin
npm install
npm run dev
```

Open the local Vite URL shown in the terminal to access the admin dashboard.

## Notes

- `frontend` and `admin` are both Vite React applications.
- `backend` uses Express, Mongoose, JWT, Stripe, and Multer.
- Ensure the backend is running before using the frontend or admin app.

## Useful Scripts

- `npm run server` — start backend with `nodemon`
- `npm run dev` — start frontend or admin in development mode
- `npm run build` — build production assets for frontend or admin
- `npm run preview` — preview built frontend or admin app

## License

This project is provided as-is for development and learning purposes.
