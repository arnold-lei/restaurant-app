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

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "sector001",
  database: "restaurant_db"
})

connection.connect(function(err) {
  if(err) throw err;
  console.log("connected as id " + connection.threadId);
})

var query = 'SELECT * FROM reservations';
 
  connection.query(query, function(err, rows, fields) {
    if (err) throw err;

    for (var i in rows) {
        console.log('Product ID: ', rows[i].id, ' Name: ', rows[i].name, ' Phone: ', rows[i].phone, ' Email: ', rows[i].email, ' Unique: ', rows[i].unique_res);
    }
  });

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