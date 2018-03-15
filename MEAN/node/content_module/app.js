const http = require('http');
const static_contents = require('./modules/static');

//creating a server
server = http.createServer(function (request, response){
    static_contents(request, response);  //this will serve all static files automatically
});
server.listen(8000);