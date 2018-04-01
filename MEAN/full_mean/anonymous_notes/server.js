var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/angularApp/dist/')));
mongoose.connect('mongodb://localhost/basic_mongoose');

var PostSchema = new mongoose.Schema({
    text: { type: String, required: true, minlength: 3 }
}, { timestamps:true });
mongoose.model('PostSchema', PostSchema);
var Post = mongoose.model('PostSchema');

app.get('/posts', (req,res)=>{
    Post.find({}, ['text','createdAt'], { sort: { 'createdAt': -1}}, (err, posts)=>{
        if (err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ posts: posts });
        }
    });
});

app.post('/post', (req,res)=>{
    var newPost = new Post( req.body );
    newPost.save(err =>{
        if (err){
            res.json({ message: "Error", error: err });
        } else {
            res.json({ message: "Success. New post has been added." })
        }
    });
});

app.get('*', (req,res,next)=>{
    res.sendFile(path.resolve('./angularApp/dist/indes.html'));
});

app.listen(8000);