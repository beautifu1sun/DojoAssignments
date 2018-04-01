var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/angularApp/dist/')));
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    fname: { type: String, required: true, minlength: 2 },
    lname: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true, minlength: 3 }, //needs regex
    password: { type: String, required: true, minlength: 16 }, //needs encryption+regex
    listings: [{
        title: { type: String, required: true },
        description: {type: String, required: true, maxlength: 200 },
        price: { type: Number, required: true }, //min $1;
        location: { type: String, required: true },
        image: { type: String, required: true } //save img
    }]
}, { timestamps: true });
mongoose.model("UserSchema", UserSchema);
var User = mongoose.model("UserSchema");

app.get('*', (req,res,next)=>{
    res.sendFile(path.resolve('./angularApp/dist/index.html'));
});

app.listen(8000);