const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// In-memory task list
let tasks = [];

// Root endpoint
app.get("/", (req, res) => {
    res.json({
        name: "Task API",
        version: "1.0",
        endpoints: ["/tasks"]
    });
});

// Health endpoint
app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Create a new task
app.post("/tasks", (req, res) => {

    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "Title is required"
        });
    }

    const task = {
        id: tasks.length + 1,
        title,
        done: false
    };

    tasks.push(task);

    res.status(201).json(task);

});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});