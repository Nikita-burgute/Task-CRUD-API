require("dotenv").config();

const { Pool } = require("pg");

// Create PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Initialize database
async function initializeDatabase() {

    while (true) {

        try {

            // Test connection
            await pool.query("SELECT NOW()");
            console.log("✅ Connected to PostgreSQL.");

            // Create table if it doesn't exist
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

            // Seed sample data only if table is empty
            if (count === 0) {

                await pool.query(`
                    INSERT INTO tasks (title, done)
                    VALUES
                    ('Learn Express', false),
                    ('Connect PostgreSQL', false),
                    ('Build CRUD API', true)
                `);

                console.log("✅ Sample tasks inserted.");
            }

            console.log("✅ Database initialization completed.");

            // Exit retry loop
            break;

        } catch (err) {

            console.log("⏳ Waiting for PostgreSQL to be ready...");
            console.log(err.message);

            // Wait 3 seconds before retrying
            await new Promise(resolve => setTimeout(resolve, 3000));
        }

    }

}

// Run initialization
initializeDatabase();

module.exports = pool;