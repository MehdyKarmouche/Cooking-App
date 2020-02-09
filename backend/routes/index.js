var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Equipment = require('../models/Equipment');
/* GET home page. */
router.get('/', function(req, res, next) {
	var equ = new Equipment({
		label : "TEST"
	});

	equ.save();

	console.log("tfou.zip")
  res.render('index', { title: 'Express' });
});

module.exports = router;
