const fs = require('fs');
var img = new RegExp('.*\.jpg')
var style = new RegExp('.*\.css')
var html = new RegExp('.*')

module.exports = function (request, response){
    //root directory - index.html
    if(request.url === '/'){
        if (request.method === 'GET'){
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            
            if (contents){
                response.writeHead(200, {'Content-Type': 'text/html'}); 
                response.write(contents);
                response.end();
            }
            else {
                response.writeHead(404);
                response.end('URL requested is not available');
            }
        });
        }
        else {
            response.writeHead(404);
            response.end("request method is not 'GET'");
        }
    //any css
    } else if(request.url.match(style)){
        fs.readFile('.' + request.url, 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    //any jpg image
    } else if(request.url.match(img)) {
        fs.readFile('.' + request.url,function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    //any other request (which we assume is html)
    } else if(request.url.match(html)){
        if(request.method === "GET"){
        fs.readFile('views/' + request.url + '.html', 'utf8', function (errors, contents) {
            if (contents){
                response.writeHead(200, {'Content-Type': 'text/html'}); 
                response.write(contents);
                response.end();
            }
            else {
                response.writeHead(404);
                response.end('URL requested is not available');
            }
        });
        }
        else {
            response.writeHead(404);
            response.end("request method is not 'GET'");
        }
    } else {
        response.writeHead(404);
        response.end('URL requested is not available');
    }
};