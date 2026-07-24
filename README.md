# Task CRUD API

A RESTful Task Management API built using **Node.js**, **Express.js**, **SQLite3**, and **Swagger UI** as part of the **FlyRank Backend AI Engineering Internship**.

This repository contains the work completed during:

- ✅ **Week 2:** CRUD API using in-memory storage
- ✅ **Week 3:** SQLite database integration with persistent storage

---

# 📌 Features

- Create a new task
- Get all tasks
- Get task by ID
- Update an existing task
- Delete a task
- Input validation
- SQLite database integration
- Persistent data storage
- Interactive API documentation using Swagger UI

---

# 🛠️ Technologies Used

- Node.js
- Express.js
- SQLite3
- Swagger UI Express
- OpenAPI 3.0

---

# 🚀 Installation & Setup

## 1. Clone the repository

```bash
git clone https://github.com/Nikita-burgute/Task-CRUD-API.git
```

## 2. Navigate to the project folder

```bash
cd Task-CRUD-API
```

## 3. Install dependencies

```bash
npm install
```

## 4. Run the application

```bash
node app.js
```

Server starts at:

```
http://localhost:3000
```

Swagger Documentation:

```
http://localhost:3000/docs
```

---

# 📚 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | API information |
| GET | `/health` | Health check |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete an existing task |

---

# 📄 Sample Request

### Create Task

**POST /tasks**

```json
{
    "title": "Learn Spring Boot"
}
```

### Response

```json
{
    "id": 4,
    "title": "Learn Spring Boot",
    "done": false
}
```

---

# 📖 Swagger UI

After starting the server, open:

```
http://localhost:3000/docs
```

Swagger allows you to:

- Create tasks
- View all tasks
- View a task by ID
- Update tasks
- Delete tasks

### Swagger Screenshot


![Swagger UI](images/swagger.jpeg)


# 📂 Project Structure

```
Task-CRUD-API
│── app.js
│── database.js
│── openapi.json
│── package.json
│── package-lock.json
│── README.md
│── .gitignore
│── images
│     └── swagger.png
```

> If `tasks.db` is committed to your repository, you can include it in the project structure. If it is ignored using `.gitignore`, leave it out.

---

# ✅ Internship Progress

### Week 2

- Express.js REST API
- CRUD operations
- Swagger Documentation
- API Validation
- GitHub Repository

### Week 3

- SQLite Database Integration
- Persistent Storage
- SQL-based CRUD Operations
- Database Initialization
- Automatic Sample Data Seeding

---

# 👨‍💻 Author

**Nikita Burgute**

Backend AI Engineering Intern

FlyRank AI Engineering Internship