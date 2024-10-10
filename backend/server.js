const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS to allow requests from different origins (like React frontend)
app.use(cors());

// Sample product data
const products = [
    { id: 1, name: 'Ceramic Mug', price: 12.99, image: '/images/mug.jpg' },
    { id: 2, name: 'Stainless Steel Spoon', price: 3.49, image: '/images/spoon.jpg' },
    { id: 3, name: 'Non-Stick Cooking Pot', price: 29.99, image: '/images/pot.jpg' },
    { id: 4, name: 'Microwave Oven', price: 89.99, image: '/images/microwave.jpg' }
];

// Route to fetch products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

