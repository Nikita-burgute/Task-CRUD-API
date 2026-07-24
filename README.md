# 🚀 Task CRUD API

A RESTful Task Management API built using **Node.js**, **Express.js**, **PostgreSQL**, **Docker**, and **Swagger UI** as part of the **FlyRank Backend AI Engineering Internship**.

This project demonstrates building a complete CRUD API, integrating it with a PostgreSQL database, and containerizing the entire application using Docker Compose.

---

## 📌 Internship Progress

| Week | Task | Status |
|------|------|--------|
| Week 2 | Build CRUD REST API | ✅ Completed |
| Week 3 | Connect API to PostgreSQL | ✅ Completed |
| Week 4 | Dockerize the application | ✅ Completed |

---

# ✨ Features

- ✅ Create a new task
- ✅ Retrieve all tasks
- ✅ Retrieve a task by ID
- ✅ Update an existing task
- ✅ Delete a task
- ✅ Input validation
- ✅ PostgreSQL database integration
- ✅ Automatic database initialization
- ✅ Sample data seeding
- ✅ Dockerized application
- ✅ Docker Compose support
- ✅ Swagger API Documentation

---

# 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL 16

### API Documentation
- Swagger UI
- OpenAPI 3.0

### DevOps
- Docker
- Docker Compose

### Packages
- pg
- dotenv
- swagger-ui-express

---

# 🏗️ Project Architecture

```text
                    ┌───────────────────────┐
                    │       Client          │
                    │ Browser / Postman     │
                    └──────────┬────────────┘
                               │
                         HTTP Requests
                               │
                               ▼
                    ┌───────────────────────┐
                    │  Express REST API     │
                    │      (Node.js)        │
                    └──────────┬────────────┘
                               │
                     PostgreSQL Queries
                               │
                               ▼
                    ┌───────────────────────┐
                    │    PostgreSQL 16      │
                    │     Database          │
                    └───────────────────────┘

          Docker Compose manages both containers
```

---

# 📂 Project Structure

```
Task-CRUD-API
│
├── app.js
├── database.js
├── Dockerfile
├── compose.yaml
├── openapi.json
├── package.json
├── package-lock.json
├── .env.example
├── README.md
├── .gitignore
│
└── images
      └── swagger.jpeg
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Nikita-burgute/Task-CRUD-API.git
```

```bash
cd Task-CRUD-API
```

---

# 🐳 Run Using Docker (Recommended)

Build and start the API and PostgreSQL database together.

```bash
docker compose up --build
```

To stop the application:

```bash
docker compose down
```

---

# ▶️ Run Without Docker

## Install Dependencies

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL=postgres://postgres:dev@localhost:5432/tasks
```

Start PostgreSQL.

Run the application:

```bash
node app.js
```

---

# 🌐 Application URLs

### API

```
http://localhost:3000
```

### Swagger Documentation

```
http://localhost:3000/docs
```

---

# 📚 API Endpoints

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | `/` | API Information |
| GET | `/health` | Health Check |
| GET | `/tasks` | Get All Tasks |
| GET | `/tasks/:id` | Get Task By ID |
| POST | `/tasks` | Create Task |
| PUT | `/tasks/:id` | Update Task |
| DELETE | `/tasks/:id` | Delete Task |

---

# 📄 Sample Request

### POST /tasks

```json
{
    "title": "Learn Docker"
}
```

### Response

```json
{
    "id": 4,
    "title": "Learn Docker",
    "done": false
}
```

---

# 📖 Swagger Documentation

After starting the application, open:

```
http://localhost:3000/docs
```

Swagger UI allows you to:

- Create Tasks
- Retrieve Tasks
- Update Tasks
- Delete Tasks

---

## 📷 Swagger Screenshot

> Add your screenshot inside the `images` folder.

```text
images/
└── swagger.jpeg
```

```markdown
![Swagger UI](images/swagger.jpeg)
```

---

# 🐳 Docker Services

Docker Compose starts two services.

| Service | Description |
|----------|-------------|
| API | Node.js + Express Application |
| Database | PostgreSQL 16 |

Run:

```bash
docker compose up --build
```

Stop:

```bash
docker compose down
```

---

# 📦 Environment Variables

Example `.env`

```env
DATABASE_URL=postgres://postgres:dev@localhost:5432/tasks
```

---

# ✅ Internship Deliverables Completed

### Week 2

- REST API
- CRUD Operations
- Swagger Documentation
- Input Validation
- GitHub Repository

### Week 3

- PostgreSQL Integration
- SQL CRUD Operations
- Persistent Data Storage
- Automatic Table Creation
- Sample Data Seeding

### Week 4

- Dockerfile
- Docker Compose
- PostgreSQL Container
- API Container
- Docker Volume
- Environment Variables
- One-command Project Startup

---

# 👨‍💻 Author

**Nikita Burgute**

Backend AI Engineering Intern

FlyRank AI Engineering Internship

---

## ⭐ Repository

If you found this project useful, consider giving it a ⭐ on GitHub.