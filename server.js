var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));  

var reservations = [];

var waitlist = [{}];

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/tables', function(req, res){
  res.sendFile(path.join(__dirname, 'tables.html'));
})

app.get('/reserve', function(req, res){
  res.sendFile(path.join(__dirname, 'reserve.html'));
})

app.get('/api/reservations', function(req, res){
  res.json(reservations);
})

app.get('/api/waitlist', function(req, res){
  res.json(waitlist);
})

app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})