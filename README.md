# Task CRUD API

A simple CRUD (Create, Read, Update, Delete) REST API built using **Node.js**, **Express.js**, and **Swagger UI** as part of the **FlyRank AI Engineering Internship – Week 2 Assignment**.

---

## 📌 Features

- Create a new task
- Get all tasks
- Update an existing task
- Delete a task
- Input validation
- Interactive API documentation using Swagger UI

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Swagger UI Express
- OpenAPI 3.0

---

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Nikita-burgute/Task-CRUD-API.git
```

### 2. Navigate to the project folder

```bash
cd Task-CRUD-API
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the server

```bash
node app.js
```

The server will start at:

```
http://localhost:3000
```

Swagger UI:

```
http://localhost:3000/docs
```

---

## 📚 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information |
| GET | `/health` | Health check |
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task |

---

## 📄 Example curl Command

Create a new task:

```bash
curl -i -X POST http://localhost:3000/tasks ^
-H "Content-Type: application/json" ^
-d "{\"title\":\"Buy milk\"}"
```

Example Response:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 1,
  "title": "Buy milk",
  "done": false
}
```

---

## 📖 Swagger UI

After starting the server, open:

```
http://localhost:3000/docs
```

You can use Swagger UI to:

- Create a task
- View all tasks
- Update a task
- Delete a task

### Swagger Screenshot

> Add your Swagger UI screenshot below.

![Swagger UI](images/swagger.png)

---

## 📂 Project Structure

```
Task-CRUD-API
│── app.js
│── openapi.json
│── package.json
│── package-lock.json
│── README.md
│── .gitignore
│── images
│     └── swagger.png
```

---

## 👨‍💻 Author

**Nikita Burgute**

Backend AI Engineering Intern Assignment  
FlyRank AI Engineering Internship