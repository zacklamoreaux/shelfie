var express = require('express');
var bodyParser = require('body-parser');
var ctrl = require('./controller');

var app = express(bodyParser.json())

const port = 4000
app.listen(port, () => console.log(`Server running on port: ${port}`))