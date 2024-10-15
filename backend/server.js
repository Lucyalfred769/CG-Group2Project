require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); // PostgreSQL client
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Create a new pool instance for PostgreSQL connection
const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
});

// Route to fetch products from the database
app.get('/api/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows); // Send the fetched products to the frontend
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Database query failed' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



