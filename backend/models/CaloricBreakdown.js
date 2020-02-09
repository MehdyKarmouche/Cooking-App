var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CaloricBreakdown = new Schema({
	percentProtein : Number,
	percentFat : Number,
	percentCrabs : Number
});

module.exports = mongoose.model('CaloricBreakdown', CaloricBreakdown);