const pool = require('../config/db');

const seedUsers = async () => {
    let connection;

    try {
        connection = await pool.getConnection();

        // Create database if not exists
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
        await connection.query(`USE ${process.env.DB_NAME}`);

        // Create users table if not exists
        await connection.query(`
            CREATE TABLE IF NOT EXISTS users
            (
                id
                INT
                AUTO_INCREMENT
                PRIMARY
                KEY,
                name
                VARCHAR
            (
                255
            ) NOT NULL,
                email VARCHAR
            (
                255
            ) NOT NULL UNIQUE
                )
        `);

        await connection.query('DELETE FROM users');

        const [result] = await connection.query(`
            INSERT INTO users (name, email)
            VALUES ('John Doe', 'john@example.com'),
                   ('Jane Smith', 'jane@example.com'),
                   ('Bob Johnson', 'bob@example.com')
        `);

        console.log(`Seeded ${result.affectedRows} users`);
        process.exit(0);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    } finally {
        await pool.end();
    }
};

seedUsers();