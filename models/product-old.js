const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );
  
  const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };

module.exports = class Product {
    constructor(t) {
// property (variable in the class)
        this.title = t;
    }

    // function 
    save() {
        getProductsFromFile(products => {
          products.push(this);
          fs.writeFile(p, JSON.stringify(products), err => {
            console.log(err);
          });
        });
      }

    // retrieve the product from the array
    static fetchAll(cb) { //cb is callback
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
            );
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(file.Content));
        })
        // return products;
    }
};