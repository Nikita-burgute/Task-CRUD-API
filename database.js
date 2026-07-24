require("dotenv").config();

const { Pool } = require("pg");

// Create PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Initialize database
async function initializeDatabase() {

    try {

        // Test connection
        await pool.query("SELECT NOW()");
        console.log("Connected to PostgreSQL.");

        // Create table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS tasks (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                done BOOLEAN NOT NULL DEFAULT FALSE
            )
        `);

        // Check if table is empty
        const result = await pool.query(
            "SELECT COUNT(*) FROM tasks"
        );

        const count = parseInt(result.rows[0].count);

        // Seed only if empty
        if (count === 0) {

            await pool.query(`
                INSERT INTO tasks (title, done)
                VALUES
                ('Learn Express', false),
                ('Connect PostgreSQL', false),
                ('Build CRUD API', true)
            `);

            console.log("Sample tasks inserted.");
        }

    }
    catch (err) {
        console.error("Database Error:", err.message);
    }

}

// Run initialization
initializeDatabase();

module.exports = pool;