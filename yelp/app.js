var express = require('express');
var app = express();
var jsonParser = require('body-parser').json();
var reviews = require('./data');

var logoArray = [
  'boardbrew-logo.jpg',
  'checkers-logo.jpg',
  'chipotle-logo.png',
  'dunkindonuts-logo.gif',
  'fpizza-logo.jpg',
  'harborgrill-logo.jpg',
  'lasalsa-logo.png',
  'oscars-logo.jpeg',
  'pandaexpress-logo.svg',
  'panera-logo.png',
  'rubios-logo.png',
  'subwayreal-logo.gif',
  'tacomesa-logo.jpg',
  'Wendys-logo.png',
  'wingstop-logo.png'
];

app.get('/reviews', function(req, res) {
  res.send(reviews);
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/default.js', function(req, res) {
  res.sendFile(__dirname + '/default.js');
});

app.get('/default.css', function(req, res) {
  res.sendFile(__dirname + '/default.css');
});

logoArray.forEach(function(logo) {
  console.log(logo);
  app.get('/images/' + logo, function(req, res) {
    res.sendFile(__dirname + '/images/' + logo);
  });
});

// app.get('/images/*', function(req, res) {
//   res.sendFile(__dirname + '/images/Wendys-logo.png');
// });

app.listen(3000);
