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
// GET ALL TASKS
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
// GET TASK BY ID
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

// ===============================
// CREATE TASK
// ===============================
app.post("/tasks", async (req, res) => {

    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "Title is required"
        });
    }

    try {

        const result = await db.query(
            `INSERT INTO tasks (title, done)
             VALUES ($1, $2)
             RETURNING *`,
            [title.trim(), false]
        );

        res.status(201).json(result.rows[0]);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

// ===============================
// UPDATE TASK
// ===============================
app.put("/tasks/:id", async (req, res) => {

    const id = req.params.id;
    const { title, done } = req.body;

    if (title === undefined && done === undefined) {
        return res.status(400).json({
            error: "Nothing to update"
        });
    }

    if (title !== undefined && title.trim() === "") {
        return res.status(400).json({
            error: "Title cannot be empty"
        });
    }

    try {

        const existing = await db.query(
            "SELECT * FROM tasks WHERE id = $1",
            [id]
        );

        if (existing.rows.length === 0) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        const task = existing.rows[0];

        const updatedTitle =
            title !== undefined ? title.trim() : task.title;

        const updatedDone =
            done !== undefined ? done : task.done;

        const result = await db.query(
            `UPDATE tasks
             SET title = $1,
                 done = $2
             WHERE id = $3
             RETURNING *`,
            [updatedTitle, updatedDone, id]
        );

        res.json(result.rows[0]);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

// ===============================
// DELETE TASK
// ===============================
app.delete("/tasks/:id", async (req, res) => {

    const id = req.params.id;

    try {

        const result = await db.query(
            "DELETE FROM tasks WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        res.sendStatus(204);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});