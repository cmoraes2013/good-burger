// Node Dependencies.
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

// Open Server and allows for deployment to Heroku.
var PORT = process.env.PORT || 3000;
var app = express();

//Set up the Express app to data parse.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Main page render.
app.get("/", (req, res) => {
  res.render("index");
});

// Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Server can begin listening to client requests.
app.listen(PORT, function() {
 // Prints when our server is listening.
  console.log("Server listening on: http://localhost:" + PORT);
});