# Task Management Dashboard

A modern and responsive **Task Management Dashboard** built using **React.js**, **Redux Toolkit** and **Tailwind CSS**.  
The application allows users to efficiently manage tasks with features like add, edit, delete, filter, search, and light/dark theme support.

---

## 🚀 Features

- Add new tasks instantly
- Edit existing tasks
- Delete tasks
- Mark tasks as **Pending** or **Completed**
- Filter tasks (All / Pending / Completed)
- Search tasks by title
- Light / Dark mode toggle
- Fully responsive UI
- Uses mock data (no backend required)

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Functional Components & Hooks)
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Data Handling:** Mock API (in-memory data)

---

## 📂 Folder Structure

```text
task-dashboard/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   └── store.js
│   │
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   ├── FilterBar.jsx
│   │   ├── SearchBar.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── features/
│   │   ├── tasks/
│   │   │   ├── tasksSlice.js
│   │   │   └── tasksAPI.js
│   │   └── theme/
│   │       └── themeSlice.js
│   │
│   ├── mock/
│   │   └── tasksData.js
│   │
│   ├── pages/
│   │   └── Dashboard.jsx
│   │
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md


## ▶️ Setup & Run Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/himansu2198/Task-Management-Dashboard.git
cd Task-Management-Dashboard
2️⃣ Install dependencies

npm install
3️⃣ Start the development server

npm start
4️⃣ Open in browser

http://localhost:3000
