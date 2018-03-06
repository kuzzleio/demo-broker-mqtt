var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://172.24.0.4');

client.on('connect', function () {
    setInterval(function () {
        client.publish('IoT_demo', 'Hello mqtt');
        console.log('Message Sent');
    }, 5000);
});