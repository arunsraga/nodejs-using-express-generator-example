var mongoose = require('mongoose');

var uri = 'mongodb://localhost/deleteit';
var db = mongoose.createConnection(uri);
console.log('i am here');

module.exports = db;
