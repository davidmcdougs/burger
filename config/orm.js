
// Create an `orm.js` file inside `config` directory.

//    * Import (require) `connection.js` into `orm.js`
var connection = require("./connect.js");
//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
var orm = {
selectAll: function(){
	var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(err, result){
		if(err) throw err;
		console.log(result);
		});
	},
insertOne: function(burgerName){
	var queryString = "INSERT INTO  burgers SET ?";
	
	connection.query(queryString, {
		name: burgerName,
		devoured: false
	}, function(err, result){
		if (err) throw err;
		console.log(result.changedRows);
	});
	},
updateOne: function(burgerName){
	var queryString = "UPDATE burgers SET devoured = true WHERE name = ?";
	connection.query(queryString, [burgerName], function(err, result){
		if(err) throw err;
		console.log(result);
	});
	}
};


module.exports = orm;

//    * Export the ORM object in `module.exports`.





