/*******************
*  NODE JS BROKER  *
********************/
var mosca = require('mosca');

var settings = {
    port: 1883
}

var server = new mosca.Server(settings);

server.on('ready', function () {
    console.log("Broker ready on port : " + settings.port);
});

server.on('clientConnected', function (client) {
    console.log('client connected', client.id);
});

server.on('published', function (packet, client) {
    console.log('Published', packet.payload);
});