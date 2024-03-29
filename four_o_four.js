var http =require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;

    if (filename == './'){
       filename = './bs_starter.html';
       }
    fs.readFile(filename, function  ( err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found.");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);

console.log('... serving pages on port 8080');
