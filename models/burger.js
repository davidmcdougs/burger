var orm = require('../config/orm.js');

var  burger = {
	all: function(cb){
		orm.selectAll('burgers', function(res){
			cb(res);
		});
	},
	//burger.all will select all items from burger
	add: function(cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function(res){
			cb(res);
		});
	//burger.add will add one object to our sql database, provided an array for called "cols" and "vals"
	//have been defined respectively.
	},

	devour: function(objColVals, name, cb){
		orm.update('burgers', objColVals, 'name = '+name, function(res){
			cb(res);
		});
	}
	//burger.devour will change a burger's status to devoured, provided that
	//you pass devour as one of values in objColVals object
};

module.exports = burger;