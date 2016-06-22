var express = require('express');
var app = express();
var jsonParser = require('body-parser').json();
var reviews = require('./data');

app.get('/', function(req, res) {
  res.sendFile(__dirname + 'index.html');
});

app.get('/default.js', function(req, res) {
  res.sendFile(__dirname + '/default.js');
});
