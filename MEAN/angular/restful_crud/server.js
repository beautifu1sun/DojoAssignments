var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/angularApp/dist')));
mongoose.connect('mongodb://localhost/basic_mongoose');

var TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false },
}, { timestamps: true });
mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task');

app.get('/tasks', function(req, res){
    Task.find({}, function(err, tasks){
        if (err){
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: "Success", tasks: tasks });
        }
    });
});

app.get('/tasks/:id', function(req, res){
    Task.findOne({ _id: req.params.id }, function(err, task){
        if (err){
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: "Success", task: task });
        }
    });
});

app.post('/tasks', function(req, res){
    var newTask = new Task( req.body );
    newTask.save(function(err){
        if (err){
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: path.join("Success. Task ", req.body.title, " have been added.") });
        }
    });
});

app.put('/tasks/:id', function(req, res){
    Task.update({ _id: req.params.id }, req.body, function(err){
        if (err){
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: path.join("Success. Requested task have been updated.") });
        } 
    });
});

app.delete('/tasks/:id', function(req, res){
    Task.remove({ _id: req.params.id }, function(err){
        if (err){
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: path.join("Success. Requested task have been deleted.") });
        } 
    });
});

app.listen(666);