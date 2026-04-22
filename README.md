# Issue Tracker - Frontend (UI)

A professional, enterprise-grade issue tracking system designed for efficient task management and team collaboration. Built with a modern React ecosystem and deployed using robust DevOps practices.



## 🚀 Tech Stack
* **Framework:** React JS (Vite)
* **State Management:** Redux Toolkit & RTK Query (for efficient API caching)
* **Styling:** Tailwind CSS
* **Form Validation:** Zod
* **Authentication:** JWT (Access & Refresh Token rotation logic)
* **UI Feedback:** React-Toastify & SweetAlert2 (for professional confirmations)
* **Deployment:** Docker, Nginx, AWS EC2

---
## 🛠️ Features & Roles

### 1. Admin Role (Current Phase)
The system currently provides a robust Admin Dashboard with the following features:

* **Comprehensive Dashboard:** * **Issue Analytics:** Visual representation of issue types with real-time counts.
  * **Team Overview:** Track team members and the count of issues assigned to them.
  * **Recent Issues:** Quick access to the most recently logged system bugs/tasks.
* **Issue Management (CRUD):** Complete control to Create, View, Update, and Delete issues.
* **Collaboration:** Ability for Admin to post **internal messages** on each individual issue for tracking.
* **Search & Filtering:** Dynamic search functionality to filter the issue list by **Status** and **Issue Name**.
* **Data Export:** Export the entire issue database into **Excel format** for offline reporting.


---
## 📦 Major Dependencies
* **@reduxjs/toolkit / react-redux** - Core state management.
* **RTK Query** - Advanced data fetching and API caching with custom interceptors for **Automatic Token Refresh**.
* **@tanstack/react-table** - Headless UI for building powerful tables and data grids.
* **react-router-dom** - Client-side routing.
* **zod** - Schema-based form validation.
* **react-toastify** - Modern notification system.
* **sweetalert2** - Interactive popup dialogs for confirmations.
* **lucide-react** - Scalable vector icons.

---
## ⚙️ Setup Instructions

### 💻 Local Development
1. **Clone the repository:**
   ```bash
   git clone https://github.com/idlakshan/Issue-Tracker-Fronted.git
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Environment Setup:**
   ```bash
   VITE_BASE_URL=http://localhost:3000/api
   ```   
4. **Launch Application::**
   ```bash
   npm run dev
   ```   
### 🐳 Production Deployment (Docker)
1. **Build Docker Image:**
   ```bash
    docker build -t issuetracker_frontend .
   ```
2. **Environment Setup:**
   ```bash
   docker run -d -p 80:80 --name frontend-container issuetracker_frontend
   ```  