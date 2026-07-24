const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");

const db = require("./database");

const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Root
app.get("/", (req, res) => {
    res.json({
        name: "Task API",
        version: "1.0",
        endpoints: ["/tasks"]
    });
});

// Health
app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

// ===============================
// GET ALL TASKS (PostgreSQL)
// ===============================
app.get("/tasks", async (req, res) => {

    try {

        const result = await db.query(
            "SELECT * FROM tasks ORDER BY id"
        );

        res.json(result.rows);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

// ===============================
// GET TASK BY ID (PostgreSQL)
// ===============================
app.get("/tasks/:id", async (req, res) => {

    const id = req.params.id;

    try {

        const result = await db.query(
            "SELECT * FROM tasks WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        res.json(result.rows[0]);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

// ===================================================
// KEEP THESE ROUTES UNCHANGED UNTIL STAGE 3
// ===================================================

// Temporary in-memory array
let tasks = [];

// Create task
app.post("/tasks", (req, res) => {

    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "Title is required"
        });
    }

    db.run(
        "INSERT INTO tasks (title, done) VALUES (?, ?)",
        [title.trim(), 0],
        function (err) {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(201).json({
                id: this.lastID,
                title: title.trim(),
                done: false
            });

        }
    );

});

// Update task
app.put("/tasks/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    const { title, done } = req.body;

    if (title === undefined && done === undefined) {
        return res.status(400).json({
            error: "Nothing to update"
        });
    }

    if (title !== undefined) {
        if (title.trim() === "") {
            return res.status(400).json({
                error: "Title cannot be empty"
            });
        }
        task.title = title;
    }

    if (done !== undefined) {
        task.done = done;
    }

    res.json(task);
});

// Delete task
app.delete("/tasks/:id", (req, res) => {

    const id = req.params.id;

    db.run(
        "DELETE FROM tasks WHERE id = ?",
        [id],
        function (err) {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (this.changes === 0) {
                return res.status(404).json({
                    error: "Task not found"
                });
            }

            res.sendStatus(204);

        }
    );

});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});