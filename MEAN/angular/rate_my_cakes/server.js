var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require("path");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/angularApp/dist/')));
mongoose.connect('mongodb://localhost/basic_mongoose');

var CakeSchema = new mongoose.Schema({
    baker: { type: String, required: true, minlength: 2 },
    imageURL: { type: String, required: true },
}, { timestamps: true });
var ReviewSchema = new mongoose.Schema({
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
})
mongoose.model("CakeSchema", CakeSchema);
mongoose.model("ReviewSchema", ReviewSchema);
var Cake = mongoose.model("CakeSchema");
var Review = mongoose.model("ReviewSchema");

app.listen(8800);