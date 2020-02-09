var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Ingredient = new Schema({
	label: String,
	image : String,
	original : String,
	amount : Number,
	unit : String
});

module.exports = mongoose.model('Ingredient', Ingredient);