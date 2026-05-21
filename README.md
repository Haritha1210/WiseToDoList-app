# Premium To-Do List Application

A fully responsive, CRUD-based To-Do List application built with a modern, glassmorphism UI. It features a vanilla HTML/CSS/JS frontend and a Node.js/Express backend that persists tasks in a JSON file.

## Features Included

- **CRUD Operations:** Add, Edit, Delete, and Mark Complete.
- **Backend Persistence:** Node.js Express server reading/writing to `data.json`.
- **Advanced UI/UX:** Fully responsive, vibrant background gradient, blur (glassmorphism) effects, and smooth animations.
- **Extra Features (Bonus Marks):** 
  - Priority Labels (High, Medium, Low)
  - Filtering by Status (All, Active, Completed)
  - Filtering by Priority

## Setup Instructions

### 1. Start the Backend

1. Make sure you have Node.js installed.
2. Open your terminal/command prompt.
3. Navigate to the `backend` folder:
   ```bash
   cd "backend"
   ```
4. Install dependencies (if you haven't already):
   ```bash
   npm install
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. The server will run on `http://localhost:3001`. Leave this terminal open.

### 2. Run the Frontend

Since the frontend is built using standard HTML, CSS, and JS, you can simply open the `index.html` file in your browser. 
- Go into the `frontend` folder.
- Double-click `index.html` to open it in Chrome, Edge, or your preferred browser.

## Deployment

### Backend (Render)
- **Status:** ✅ Deployed  
- **URL:** https://wisetodolist-app-1.onrender.com
- Deployed using Node.js on Render with `backend/server.js` as entry point.

### Frontend (Vercel)

#### Step 1: Connect Repository to Vercel
1. Go to [https://vercel.com](https://vercel.com) and sign in (create account if needed).
2. Click **"Add New..." → "Project"**.
3. Select **"Import Git Repository"**.
4. Paste this repo URL: `https://github.com/Haritha1210/WiseToDoList-app.git`
5. Click **"Import"**.

#### Step 2: Configure Build Settings
1. Under **"Root Directory"**, select `frontend` from the dropdown (or leave blank if auto-detected).
2. **Build Command:** Leave as default or set to `npm install` (no build needed for vanilla frontend).
3. **Output Directory:** Leave as default or set to `frontend` (Vercel will serve static files).
4. Click **"Deploy"**.

#### Step 3: Verify Deployment
- Vercel will auto-deploy from the `main` branch.
- Your frontend URL will be displayed (e.g., `https://wise-to-do-list-app-xxxx.vercel.app/`).
- The `vercel.json` file automatically routes `/api/*` calls to the Render backend.

#### Step 4: Test the App
- Open your Vercel deployment URL in a browser.
- Sign up / Log in to verify API communication with the Render backend.
- If you see "Server error. Ensure backend is running," the Render backend may be spinning up (can take 30–60 seconds on first request).

### How It Works
- **Frontend** (Vercel): Serves the static HTML/CSS/JS from the `frontend/` directory.
- **Backend** (Render): Express API running at `https://wisetodolist-app-1.onrender.com`.
- **API Routing** (`vercel.json`): Automatically rewrites `/api/*` requests to the Render backend.
- **Environment-Aware URL**: The frontend uses `/api` in production and `http://localhost:3001/api` in local dev.

## Code Overview

- **HTML:** Uses semantic tags (`<header>`, `<form>`, `<ul>`, `<li>`) with FontAwesome icons.
- **CSS:** Utilizes CSS Custom Properties (Variables) for easy theming, Flexbox for layout, and media queries for responsiveness.
- **JS:** Vanilla JavaScript interacting with the DOM. Uses modern `async/await` syntax for all API requests to the backend.
- **Node.js/Express:** A lightweight REST API using `express` and standard file system (`fs`) modules for JSON read/writes.
