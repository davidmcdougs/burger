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

module.exports = router;