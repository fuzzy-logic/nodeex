var net = require('net');
 
var server = net.createServer(function (socket) {
	socket.write('Welcome to the Telnet server!');
}).listen(8888);
