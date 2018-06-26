var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '/angularApp/dist')));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/basic_mongoose');

var RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    cuisine: { type: String, required: true, minlength: 3 },
    reviews: [{
        review: { type: String, required: true, minlength: 3 },
        rating: { type: Number, default: 0 },
        reviewer: { type: String, required: true, minlength: 3 }
    }]
}, { timestamps: true });
mongoose.model('Restaurant', RestaurantSchema);
var Restaurant = mongoose.model('Restaurant');

app.get('/restaurants', (req,res) => {
    Restaurant.find({}, (err, restaurants)=>{
        if (err){
            res.json({ message: "Error", error: err });
        }
        else {
            res.json({ restaurants: restaurants });
        }
    })
});

app.get('/restaurant/:id', (req,res) => {
    Restaurant.findOne({ _id: req.params.id }, (err, restaurant)=>{
        if (err){
            res.json({ message: "Error", error: err });
        }
        else {
            res.json({ restaurant: restaurant });
        }
    })
});

app.post('/addRestaurant', (req,res) =>{
    let newRestaurant = new Restaurant( req.body );
    newRestaurant.save((err)=>{
        if (err){
            res.json({ message: "Error", error: err });
        } 
        else{
            res.json({ message: "Success. New restaurant has been added." });
        }
    });
});

app.put('/updateRestaurant', function(req, res){
    Restaurant.update({ _id: req.body['_id'] }, req.body, { runValidators: true }, function(err, data){
        if (err){
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: path.join("Success. Requested restaurant has been updated.") });
        } 
    });
});

app.delete('/deleteRestaurant/:id', (req,res) =>{
    Restaurant.remove({ _id: req.params.id }, function(err){
        if (err){
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: path.join("Success. Requested restaurant has been deleted.") });
        } 
    });
});

app.post('/addReview/:id', (req,res) => {
    Restaurant.findOne({ _id: req.params.id }, (err,restaurant)=>{
        if (err){
            res.json({ message: "Error", error: err });
        } else{
            restaurant.reviews.push({ 'review': req.body.review, 'rating': Number(req.body.rating), 'reviewer': req.body.reviewer });
            restaurant.save(err =>{
                if (err){
                    res.json({ message: "Error", error: err });
                } else{
                    res.json({ message: "Success. New review has been added." });
                }
            });
        }
    });
});

app.get('*', (req,res,next) => {
    res.sendFile(path.resolve('./angularApp/dist/index.html'));
});

app.listen(7700);