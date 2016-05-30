'use strict';

var config = require('./server/config/config');
var mongoose = require('mongoose');

var db = mongoose.connect(config.db.uri, config.db.options, function(err) {
  if (err) {
    console.error('Could not connect to MongoDB!');
    console.log(err);
  }
});
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);

var app = require('./server/init/express')(db);
var server = app.listen(8080, function () {
  console.log('Server Listening at http://localhost:%s', server.address().port);
});

