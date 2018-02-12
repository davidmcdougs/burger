var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
	burger.all(function(db){
		var burgersObject = {
			burgers: db
		};
		console.log(burgersObject);
		res.render("index", burgersObject);
	});
});
router.post("/toeaten", function(req, res){
	var name = req.body;
	var objColVals = {
		cols: ['name', 'devoured'],
		vals: [name, true]
	};
	burger.devour(objColVals, name, function(data){
	console.log(objColVals);
	console.log(data);
	res.json(data);
	});
});

module.exports = router;