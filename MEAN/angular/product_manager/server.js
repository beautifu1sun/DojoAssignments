var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(express.static(path.join(__dirname, '/angularApp/dist/')));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/basic_mongoose');

var ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 4 },
    price: { type: Number, required: true },
    imageUrl: { type: String }
}, { timestamps: true });
mongoose.model("Product", ProductSchema);
var Product = mongoose.model("Product");

app.get('/showProduct/:id', (req,res) => {
    Product.findOne( {_id: req.params.id}, (err, data) =>{
        if (err){
            res.json({ message: "Error", error: err });
        } else{
            res.json({ message: "Success", data: data });
        }
    });
});

app.post('/addproduct', (req,res) => {
    var newProd = new Product(req.body);
    newProd.save((err)=>{
        if(err){
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: path.join('Success. Product "', req.body.title, '" has been added.')});
        }
    });
});

app.get('/showProducts', (req,res) =>{
    Product.find({}, (err,data)=>{
        if (err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "Success", data: data });
        }
    });
});

app.delete('/deleteProduct/:id', (req,res)=>{
    Product.remove({ _id: req.params.id }, (err)=>{
        if (err){
            res.json({ message:"Error", error: err });
        }
        else{
            res.json({ message:"Succes. Product has been removed."})
        }
    });
});

app.put('/updateProduct', function(req, res){
    Product.update({ _id: req.body['_id'] }, req.body, { runValidators: true }, function(err){
        if (err){
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: path.join("Success. Requested product has been updated.") });
        } 
    });
});

app.get('*', (req,res,next)=>{
    res.sendFile(path.resolve('./angularApp/dist/index.html'));
});

app.listen(8000);