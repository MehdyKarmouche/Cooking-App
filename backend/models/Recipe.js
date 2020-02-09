var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var Recipe = new Schema({
	title : String,
	type: String,
	cooking_time : Number,
	preparation_time : Number,
	servings : Number,
	instructions : [String],
	image : String,
	ingredients : [{type: Schema.type.ObjectId, ref : 'Ingredient'}],
	caloric_breakdown : {type: Schema.type.ObjectId, ref : 'CaloricBreakdown'}
});


module.exports = mongoose.model('Recipe', Recipe);