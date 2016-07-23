var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));  

var reservations = []

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/tables', function(req, res){
  res.sendFile(path.join(__dirname, 'tables.html'));
})

app.get('/makeRes', function(req, res){
  res.sendFile(path.join(__dirname, 'makeRes.html'));
})
