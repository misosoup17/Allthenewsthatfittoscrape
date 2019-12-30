
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Handlebars = require('handlebars');
var exphbs = require('express-handlebars');
var path = require("path");
var router = require('./routes/routes');
var app = express();
require('dotenv').config();
// scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("./models");
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router);
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
let saved;
Handlebars.registerHelper("isSaved", function (saved) {
    console.log("saved\n" + saved);
    if (saved === true || saved === false) {
        return true;
    } else {
        return false;
    }
});

mongoose.Promise = Promise;
var MONGODB_URI = process.env.MONGODB_URI || "https://thescrape.herokuapp.com/"

 mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});