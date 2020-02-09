var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var Equipment = new Schema({
	label : String
});

module.exports = mongoose.model('Equipment', Equipment);