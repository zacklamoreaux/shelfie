var express = require('express');
var bodyParser = require('body-parser');
var ctrl = require('./controller');
var massive = require('massive');
var dotenv = require('dotenv').config() 

var app = express(bodyParser.json())

massive(process.env.connectionString).then( instance => {
  app.listen(port, () => console.log(`Server running on port: ${port}`))

})

const port = 4000