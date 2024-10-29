//from w3school
var http = require('http');

http.createServer(function(req, res){
    res.write('Hello World');
    res.end(res.statusCode);
}).listen(3888);