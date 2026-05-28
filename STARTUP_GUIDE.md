# 🚀 VectorShift Pipeline Builder - Startup Guide

This repository contains a full-stack web application for building visual pipelines. The frontend is built using **React Flow**, **Zustand**, and **Vanilla CSS** with a premium glassmorphic dark mode. The backend is built using **FastAPI** to parse pipelines and perform topological graph analysis to verify if the pipelines form a **Directed Acyclic Graph (DAG)**.

---

## 🛠️ Project Structure

```
├── backend/
│   └── main.py          # FastAPI application & DAG verification algorithm
└── frontend/
    ├── src/
    │   ├── nodes/       # Custom React Flow node components & BaseNode
    │   ├── ui.js        # Main layout, canvas & React Flow setup
    │   ├── store.js     # Zustand state management
    │   └── index.css    # Premium global CSS styles & variables
    ├── package.json     # Frontend dependencies & start scripts
    └── README.md        # Technical design system details
```

---

## ⚙️ Backend Startup Instructions (FastAPI)

The backend is built with FastAPI and requires Python 3.8+.

### 1. Navigate to the backend directory
```bash
cd backend
```

### 2. Install dependencies
Ensure you have `fastapi`, `uvicorn`, and `pydantic` installed:
```bash
pip install fastapi uvicorn pydantic
```

### 3. Launch the local development server
Run the development server with auto-reload enabled:
```bash
uvicorn main:app --reload
```
*   The API server will start running at **`http://127.0.0.1:8000`**.
*   You can access the interactive API docs (Swagger UI) at **`http://127.0.0.1:8000/docs`**.

---

## 💻 Frontend Startup Instructions (React)

The frontend is a React application managing pipeline state with Zustand.

### 1. Navigate to the frontend directory
```bash
cd frontend
```

### 2. Install package dependencies
Ensure all node modules are correctly installed:
```bash
npm install
```

### 3. Launch the development server
Run the React development server:
```bash
npm start
```
*   The application will start running at **`http://localhost:3000`** in your browser.

### 4. Build for Production
To bundle the optimized assets for production hosting:
```bash
npm run build
```

---

## 🌟 Premium Features Implemented

1.  **Zustand Hooks Refactoring**: Modified the Zustand hooks from object-based selectors (which caused infinite loop rendering bugs in Zustand) to performant, individual selector hooks.
2.  **Modular Fields**: Forms inside nodes are constructed using decoupled, reusable UI fields (`TextField`, `SelectField`, and `TextAreaField`).
3.  **Beautiful Dark Mode Style**: Integrated sleek HSL-tailored typography and custom gradient accent strips on the headers of all 9 nodes (Input, Output, LLM, Text, API, Condition, Timer, Note, Merge).
4.  **One-Click Node Deletion**: Added a responsive, red-hoverable `✕` button to the top-right of every node header that cleanly removes the node and instantly sweeps away all connected edges.
5.  **Double-Click Edge Deletion**: Double-clicking on any connection line immediately deletes it, freeing up node handles for quick re-connections.
6.  **Topological DAG Analysis**: The FastAPI backend implements a full Depth-First Search (DFS) topological sort algorithm to verify pipeline cycles on submission.
