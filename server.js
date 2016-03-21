var http = require('http');
var db =  require('./lib/dmsDb');
var app = require('./app')(db);

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
http.createServer(app).listen(server_port, server_host, function(){
	console.log('Express server listening on port ' + app.get('port'));
});
