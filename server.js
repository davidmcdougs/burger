//dependancies
var express = require("express");
var bodyParser = require("body-parser");

//import
var orm = require("./config/orm.js");
//express variables
var app = express();
var port = 3000;
//body-parser requisites
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// orm.updateOne("veggie burger");
// orm.insertOne("gay burger");
// orm.selectAll();
// all three ORM functions worked!

//what i still need help with:
//How do i deploy to heroku?
//how do i stop from pushing my node modules?
//how tf do i use handlebars?

