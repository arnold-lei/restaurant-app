var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mysql = require('mysql');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));  

var reservations = [
  {
    customerName: 'boris',
    reserve_phone: '6666666',
    reserve_email: 'okay@okay.net',
    reserve_uniqueID: 76767
  },
];

var waitlist = [
  {
  customerName: 'craig sager',
  reserve_phone: '6666666',
  reserve_email: '5@live.org',
  reserve_uniqueID: 99999
  },
];

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/tables', function(req, res){
  res.sendFile(path.join(__dirname, 'tables.html'));
})

app.get('/reserve', function(req, res){
  res.sendFile(path.join(__dirname, 'reserve.html'));
})
  
app.get('/api/tables', function(req, res){
  res.json(reservations);
})

app.get('/api/waitlist', function(req, res){
  res.json(waitlist);
})

app.post('/api/tables', function(req, res){
  var newRes = req.body;
  
  console.log(newRes);
  
  reservations.push(newRes);
  
  res.json(newRes);
})

app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})