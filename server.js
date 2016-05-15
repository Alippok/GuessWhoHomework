var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;




app.use(express.static('client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/guessWhoData';

app.get("/api/people", function(req, res){
  MongoClient.connect(url, function(err, db){
    var collection = db.collection('people');
    collection.find({}).toArray(function(err, docs){
      res.json(docs);
      db.close;
    });
  });
})

var server = 
  app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
  });


