# Task Management System

This API provides functionalities to manage tasks, including user authentication, task creation, retrieval, updating, and deletion.

---

## **Live API URL**
**Base URL**: [https://task-management-system-bqir.onrender.com](https://task-management-system-bqir.onrender.com)

---

## **Authentication**

### **1. Login**
- **URL**: `/api/v1/users/login`
- **Method**: `POST`
- **Headers**: None
- **Body**:
  ```json
  {
      "email": "agbetifavour1@gmail.com",
      "password": "Favour123"
  }



## Authentication
### JWT Bearer Token
Upon successful login or signup, a JWT Bearer Token is returned. This token must be used in the `Authorization` header for all subsequent requests.

---

## User Management
### Signup
**URL:** `/api/v1/users/signup`  
**Method:** `POST`  
**Headers:** None  
**Body:**
```json
{
    "name": "Favour",
    "email": "agbetifavour1@gmail.com",
    "password": "Favour123",
    "confirmPassword": "Favour123"
}
```
**Response:**  
A new user is created, and a JWT Bearer Token is returned.

---

## Task Management

### 1. Create a New Task
**URL:** `/api/v1/tasks`  
**Method:** `POST`  
**Headers:**
```
Authorization: Bearer <your-token>
```
**Body:**
```json
{
    "title": "Complete the frontend",
    "description": "Design and implement the user interface for task management.",
    "dueDate": "2025-01-05",
    "priority": "high"
}
```
**Response:**  
A new task is created and returned in the response.

### 2. Get All Tasks
**URL:** `/api/v1/tasks`  
**Method:** `GET`  
**Headers:**
```
Authorization: Bearer <your-token>
```
**Response:**  
Returns a list of all tasks.

### 3. Get a Specific Task
**URL:** `/api/v1/tasks/:id`  
**Example:** `/api/v1/tasks/677f97a5a4e9abbb9a0fcc70`  
**Method:** `GET`  
**Headers:**
```
Authorization: Bearer <your-token>
```
**Response:**  
Returns the task with the specified ID.

### 4. Update a Task
**URL:** `/api/v1/tasks/:id`  
**Example:** `/api/v1/tasks/677f97a5a4e9abbb9a0fcc70`  
**Method:** `PATCH`  
**Headers:**
```
Authorization: Bearer <your-token>
```
**Body:**
```json
{
    "title": "Complete backend",
    "description": "Develop the API endpoints for user authentication and task management.",
    "dueDate": "2025-01-10",
    "priority": "high"
}
```
**Response:**  
Updates and returns the modified task.

### 5. Delete a Task
**URL:** `/api/v1/tasks/:id`  
**Example:** `/api/v1/tasks/677f97a5a4e9abbb9a0fcc70`  
**Method:** `DELETE`  
**Headers:**
```
Authorization: Bearer <your-token>
```
**Response:**  
Deletes the task and returns a success message.

---

## How to Use

### Clone the Repository
```bash
git clone https://github.com/your-username/task-management-system.git
```

### Install Dependencies
```bash
npm install
```

### Run the Project Locally
```bash
npm start
```

