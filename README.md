# 📊 Project Management System

A full-stack web application built to manage projects, tasks, and team collaboration efficiently. This system helps teams organize work, track progress, and manage workflows in a structured way.

---

## 🚀 Project Overview

This application provides a simple yet powerful project management solution where users can:

- Create and manage projects  
- Assign and track tasks  
- Monitor project progress  
- Organize workflows efficiently  
- Maintain team collaboration  

The system follows a modular structure to ensure scalability and maintainability.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Inertia.js, Bootstrap  
- **Backend:** Laravel (PHP)  
- **Database:** MySQL  
- **Architecture:** MVC Pattern  
- **Version Control:** Git & GitHub  

---

## ✨ Key Features

### 📁 Project Management
- Create, update, and delete projects  
- Organize projects with structured workflows  

### ✅ Task Management
- Assign tasks to users  
- Track task status (To Do, In Progress, Completed)  
- Update task progress in real-time  

### 👥 User Management
- Role-based access control (Admin/User)  
- Secure authentication system  

### 📊 Dashboard
- Overview of projects and tasks  
- Simple analytics for progress tracking  

---

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/muhammadahmadhammad-dot/project-managment.git

# Navigate to project directory
cd project-management

# Install backend dependencies
composer install

# Install frontend dependencies
npm install

# Setup environment file
cp .env.example .env

# Generate app key
php artisan key:generate

# Run migrations
php artisan migrate

# Start development server
php artisan serve

# Run frontend
npm run dev
