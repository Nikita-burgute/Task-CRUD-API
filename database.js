const sqlite3 = require("sqlite3").verbose();

// Create or open the database
const db = new sqlite3.Database("./tasks.db", (err) => {
    if (err) {
        console.error("Error connecting to database:", err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

// Create table and seed sample data
db.serialize(() => {

    // Create tasks table
    db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            done INTEGER NOT NULL DEFAULT 0
        )
    `);

    // Check if table is empty
    db.get("SELECT COUNT(*) AS count FROM tasks", (err, row) => {
        if (err) {
            console.error("Error checking tasks table:", err.message);
            return;
        }

        // Seed only if table is empty
        if (row.count === 0) {

            const stmt = db.prepare(
                "INSERT INTO tasks (title, done) VALUES (?, ?)"
            );

            stmt.run("Learn Express", 0);
            stmt.run("Connect SQLite", 0);
            stmt.run("Build CRUD API", 1);

            stmt.finalize();

            console.log("Sample tasks inserted.");
        }
    });

});

module.exports = db;