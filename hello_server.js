var http =require('http');
var url  = require('url');

http.createServer(function name(req, res) {
    res.writeHead(200, {'Content_Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var dates = q.year;
    res.write(dates)
    res.end();
    }).listen(8080);
