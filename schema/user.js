var mongoose =  require('../config/mongoose');
var Schema = require('mongoose').Schema;
var mySchema = Schema({name: String});

/* global db */
module.exports = mongoose.model('MyModel', mySchema);
