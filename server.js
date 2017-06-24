// Server Dependencies
var express = require ('express');
var bodyParser = require ('body-parser');
var logger = require ('morgan');
var mongoose = require ('mongoose');

// Schema
var Articles = require ('./models/article');

// New express app
var app = express();
// Set initial port
var PORT = process.env.PORT || 3000;

// Run Morgan for logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('./public'));

// ------------------------------------------------

// Mongodb Config
mongoose.connect('mongodb://mongodb://canyon:Iliketoeatstuff@ds137882.mlab.com:37882/articles')
var db = mongoose.connection;

db.on('error', function (err) {
	console.log("Mongoose Error: ", err);
});

db.once('open',function () {
	console.log("Mongoose connection successful.");
});


// -------------------------------------------------

// Starting express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

