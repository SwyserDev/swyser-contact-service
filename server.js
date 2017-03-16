// Library imports
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');

// Custom module imports
var contactRoutes = require('./contactRoutes.js');

var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/', contactRoutes.routes());

app.listen(8080);
console.log('Server running on port 8080...');
