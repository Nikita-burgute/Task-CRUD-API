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

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});