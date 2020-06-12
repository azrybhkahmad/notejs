const path = require('path');
const express = require('express');
// const rootDir = require('../util/path');
// import
const productsController = require('../controllers/products');
const router = express.Router();

// const products = [];

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);


// dont need to exports products in admin.js file since no longer have array here [] (move to controllers/products.js)
// exports.routes = router;
// exports.products = products;

module.exports = router;