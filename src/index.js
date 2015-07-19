var mongoose = require('mongoose');
var service = require('./tickler-service');
module.exports = service;
module.exports.connect = function(connectionString) {
  mongoose.connect(connectionString);
};


