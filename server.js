var express = require('express');
var app = express();
var port = process.env.PORT || 8088;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);
app.set('trust proxy', 'loopback');

mongoose.connect('mongodb://localhost:27017/click', function(err) {
  if (err) {
    console.log('Not connected to the database: ' + err);
  } else {
    console.log('Connected to the database');
  }
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(port, function() {
  console.log('Server running on port ' + port);
});
