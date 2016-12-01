require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/dumbdevblog');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('listening on port: ' + PORT);
});