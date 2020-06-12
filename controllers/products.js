// const products = [];
const Product = require('../models/product');
// import getaddproduct into admin.js file
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });
    const product = new Product(req.body.title); //create new product based on the class
    product.save(); //save the product
    res.redirect('/');
};

  exports.getProducts = (req, res, next) => {
    // const products = adminData.products; (no longer needed since there are already array)
    // render the page with the products(adminData.products)
    Product.fetchAll(products => {;
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      })
    });
  };