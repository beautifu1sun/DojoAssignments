var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/angularApp/dist/')));
mongoose.connect('mongodb://localhost/basic_mongoose');

var PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    position: { type: String },
    game1_status: { type: Number, default: 0 },
    game2_status: { type: Number, default: 0 },
    game3_status: { type: Number, default: 0 }
}, { timestamps: true });
mongoose.model("PlayerSchema", PlayerSchema);
var Player = mongoose.model("PlayerSchema");

app.get('/players', (req,res)=>{
    Player.find({}, 'name position _id', (err,players)=>{
        if (err){
            res.json({ message:"Error", error: err });
        }else{
            res.json({ players:players });
        }
    })
});

app.get('/playersByGame/:id', (req,res)=>{
    Player.find({}, ['name', req.params.id, '_id' ], (err,players)=>{
        if (err){
            res.json({ message:"Error", error: err });
        }else{
            res.json({ players:players });
        }
    })
});

app.put('/changeStatus/:id', (req,res)=>{
    Player.findOne( { _id: req.params.id }, (err, player)=>{
        if (err){
            res.json({ message: "Error", error: err });
        }
        else{
            player[req.body.game_id] = req.body.newStatus;
            player.save(err=>{
                if (err){
                    res.json({ message: "Error", error: err });
                } else{
                    res.json({ message: "Success. Player's status has been changed." })
                }
            });
        }
    });
});

app.post('/createPlayer', (req,res)=>{
    var newPlayer = new Player( req.body );
    newPlayer.save(err=>{
        if (err){
            res.json({ message: "Error", error: err });
        }else{
            res.json({ message: "Success. New player has been added." });
        }
    });
});

app.delete('/deletePlayer/:id', (req,res)=>{
    Player.deleteOne({ _id: req.params.id }, (err)=>{
        if (err){
            res.json({ message: "Error", error: err });
        }else{
            res.json({ message: "Success. Requested player has been deleted." });
        }
    });
});
    
app.get('*', (req,res,next)=>{
    res.sendFile(path.resolve('./angularApp/dist/index.html'));
});

app.listen(1337);