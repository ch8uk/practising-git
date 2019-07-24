var http =require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    console.log(q);
    fs.readFile('bs_starter.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        //console.log("... incoming Request on " + req.url);
        res.end();
    });
    res.writeHead(200, {'Content_Type': 'text/html'});
}).listen(8080);

console.log('... serving pages on port 8080');
