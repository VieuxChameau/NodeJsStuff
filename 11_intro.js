var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile('11_intro.html', function (err, contents) {
        response.write(contents);
        response.end();
        // can be response.end(contents);
    });

}).listen(8080);

console.log('Listening on port 8080');
