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

## Deployment Links (Placeholder)

- **Frontend:** [Link to Netlify / Vercel]
- **Backend:** [Link to Render / Heroku]

*(To fulfill the deployment requirement, you can drag and drop the `frontend` folder into Netlify. For the backend, you can deploy the `backend` folder to a service like Render as a Node.js Web Service.)*

## Code Overview

- **HTML:** Uses semantic tags (`<header>`, `<form>`, `<ul>`, `<li>`) with FontAwesome icons.
- **CSS:** Utilizes CSS Custom Properties (Variables) for easy theming, Flexbox for layout, and media queries for responsiveness.
- **JS:** Vanilla JavaScript interacting with the DOM. Uses modern `async/await` syntax for all API requests to the backend.
- **Node.js/Express:** A lightweight REST API using `express` and standard file system (`fs`) modules for JSON read/writes.
