//dependancies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//import
var orm = require("./config/orm.js");

//express variables
var app = express();
app.use(express.static("views"));
var PORT = process.env.PORT || 3000;
//body-parser requisites
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controller/router.js");
console.log(router);
app.use(router);


app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
