import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // Fetch products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:7241/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    // Add product to cart
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div>
            <h1>Kitchenware Products</h1>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            <div>
                <h2>Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index}>
                            <h4>{item.name}</h4>
                            <p>Price: ${item.price}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;

