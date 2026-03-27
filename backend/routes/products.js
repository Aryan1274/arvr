'use strict';

const express = require('express');
const router = express.Router();

// Sample data
let products = [];

// Create a product
router.post('/', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

// Read all products
router.get('/', (req, res) => {
    res.json(products);
});

// Read a product by ID
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});

// Update a product
router.put('/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Product not found');
    products[productIndex] = req.body;
    res.json(products[productIndex]);
});

// Delete a product
router.delete('/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Product not found');
    products.splice(productIndex, 1);
    res.status(204).send();
});

module.exports = router;