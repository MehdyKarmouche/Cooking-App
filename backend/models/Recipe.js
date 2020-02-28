var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var Recipe = new Schema({
	title : {type:String,unique : true},
	type: [String],
	diets: [String],
	cuisines: [String],
	cooking_time : Number,
	preparation_time : Number,
	servings : Number,
	instructions : [String],
	image : String,
	ingredients : [{label: String, image : String, original : String , amount : Number , unit : String}],
	equipments: [{label : String}],
	caloric_breakdown : {type: Schema.Types.ObjectId, ref : 'CaloricBreakdown'}
});


module.exports = mongoose.model('Recipe', Recipe);