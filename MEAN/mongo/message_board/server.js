var app = require('express')();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/basic_mongoose');

var Schema = mongoose.Schema;
var messageSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 }, 
    text: { type: String, required: true }, 
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });
var commentSchema = new mongoose.Schema({
    _message: { type: Schema.Types.ObjectId, ref: 'Message' },
    name: { type: String, required: true, minlength: 4 }, 
    text: { type: String, required: true },
}, { timestamps: true });
mongoose.model("Message", messageSchema);
mongoose.model("Comment", commentSchema);
var Message = mongoose.model("Message");
var Comment = mongoose.model("Comment");

app.get('/', function(req,res){
    Message.find({})
        .populate('comments')
        .exec(function(err, messages){
            if (err){
                console.log(err);
            }
            else{
                res.render('index', {messages: messages});
            }
    }); 
});
app.post('/postMessage', function(req,res){
    var newMessage = new Message({name: req.body.name, text: req.body.mes});
    newMessage.save( function(err, message){
        if (err){
            console.log(err);
            res.redirect('/');
        } 
        else{
            res.redirect('/');
        }
    });
});
app.post('/postComment/:id', function(req,res){
    Message.findOne({_id: req.params.id}, function(err, message){
        if (err){
            console.log(err);
        }
        else{
            var comment = new Comment({name: req.body.name, text: req.body.com});
            comment._message = message._id;
            message.comments.push(comment);
            comment.save(function(err){
                if (err){
                    console.log(err);
                }
                else{
                    message.save(function(err){
                          if(err) { console.log(err); } 
                          else { res.redirect('/'); }
                    });
                }
            });
        }
    });
});

app.listen(8000);