/*******************
*  NODE JS BROKER  *
********************/
var mosca  = require('mosca');
var Kuzzle = require('kuzzle-sdk');

//connect to kuzzle
var kuzzle = new Kuzzle(
  'kuzzle-ineo.uat.kuzzle.io', 
  {
    defaultIndex: 'ineo',
    autoReconnect: true
  },
  function (err, res) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Connected to Kuzzle");
  }
);

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
  console.log('Packet received', packet);

  const data = {
    topic: packet.topic,
    payload: packet.payload.toString(),
    messageId: packet.messageId,
    qos: packet.qos,
    retain: packet.retain
  };

  kuzzle
    .collection('ineo-data', 'ineo')
    .createDocument(data, function (err, res) {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Document sent to Kuzzle');
    })
});