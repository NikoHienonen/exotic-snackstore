'use strict';
const express = require('express');
const crudrepo = require('./database/crudrepository.js');
const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json());

const server = app.listen(8080, () => {
    console.log(`Listening on port ${server.address().port}`);
});

// Fetch all users
app.post('/users', (req, res) => {
    const user = req.body;
    crudrepo.getUser(user, (results) => {
        if(results[0].id) { 
            res.status(200).send(results[0].name);
        } else {
            res.status(404).send(results);
        }
    });
});

// Fetch all products
app.get('/products', (req, res) => {
    console.log('Getting /products');
    crudrepo.getProducts((results) => {
        res.send(results);
    });
});

// Fetch all products by search value
app.get('/search/:value', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    let value = req.params.value;
    console.log(`Getting /search/${value}`);
    crudrepo.getProductsBySearchValue(req.params.value, (results) => {
        res.send(results);
    });
});

// Fetch all products by a country
app.get('/countries/:country', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const country = req.params.country;
    console.log(`Getting /countries/${country}`);
    crudrepo.getProductsByCountry(country, (results) => {
        res.send(results);
    });
});

// Fetch all products by a category
app.get('/category/:value', (req, res) => {
    // curl http://localhost:8080/category/salty
    res.header('Access-Control-Allow-Origin', '*');
    const value = req.params.value;
    console.log(`Getting /category/${value}`);
    crudrepo.getProductsByCategory(value, (results) => {
        res.send(results);
    });
});

// Fetch product by id
app.get('/products/id/:id', (req, res) => {
    // curl http://localhost:8080/products/id/1
    res.header('Access-Control-Allow-Origin', '*');
    const value = req.params.id;
    console.log(`Getting /product/id/${value}`);
    crudrepo.getProductById(value, (results) => {
        res.send(results);
    });
});
/*
app.get('/countries/:country', (req, res) => {
    // curl http://localhost:8080/countries/japan
    res.header('Access-Control-Allow-Origin', '*');
    const country = req.params.country;
    console.log(`Getting /countries/${country}`);
})


app.get('/products/:id([0-9]+)', (req, res) => {
  crudrepo.findById(req.params.id, (results) => {
    let obj = JSON.stringify(results)
    res.send(`Results with id: ${req.params.id} ` + '\n' + obj)
  })
})

app.post('/products', (req, res) => {
  var productData = req.body
  crudrepo.save(productData, (result) => {
    res.send(result)
  })
})

app.delete('/products/:id([0-9]+)', (req, res) => {
  crudrepo.deleteById(req.params.id, (results) => {
    res.send(results)
  })
})
*/
