// app.js

const data = require('./data');
const HTTP_PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();


app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.use(express.static('public'));

// Default route to load the home page
app.get('/', (req, res) => {
  res.render('index', { data });
});

// Route to display information about all users in a table
app.get('/users', (req, res) => {
  res.render('users', { users: data.users });
});

// Route to display information about all products in a table
app.get('/products', (req, res) => {
  res.render('products', { products: data.products });
});

// Route to display filtered products (only those with PID > 3)
app.get('/display', (req, res) => {
  res.render('display', { products: data.products });
});
