const express = require('express');
require('dotenv').config();
const pool = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

// Root endpoint with API information
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'ok',
        version: '1.0.0',
        description: 'This is a simple Express.js API with a health check endpoint and a users endpoint.',
        endpoints: {
            health: '/health',
            users: '/users'
        }
    });
});

// Health check endpoint
app.get('/health', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        await connection.ping();
        connection.release();
        res.status(200).json({status: 'healthy', database: 'connected'});
    } catch (error) {
        console.error('Health check failed:', error);
        res.status(500).json({status: 'unhealthy', database: 'disconnected'});
    }
});

// Users endpoint
app.get('/users', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Database query failed:', error);
        res.status(500).json({error: 'Database query failed'});
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;