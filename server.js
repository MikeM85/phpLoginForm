var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// Configure the Express application
var app = express();
var PORT = process.env.PORT || 3333;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './CSS')));

// // Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// // Add the application routes
require(path.join(__dirname, './assets/index.php'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Page is listening on PORT: ' + PORT);
})