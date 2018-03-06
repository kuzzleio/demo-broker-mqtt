var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker-ineo.uat.kuzzle.io');

client.on('connect', function () {
    setInterval(function () {
        client.publish('IoT_demo', 'Hello mqtt');
        console.log('Message Sent');
    }, 5000);
});