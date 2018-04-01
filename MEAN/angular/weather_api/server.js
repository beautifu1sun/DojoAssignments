var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'angularApp/dist')));

app.get('*', (req,res,next) => {
  res.sendFile(path.resolve("./angularApp/dist/index.html"))
});

app.listen(7777);