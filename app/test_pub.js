var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://uat.kuzzle.io:9010');

client.on('connect', function () {
    console.log("connected to broker")
    setInterval(function () {
        client.publish('IoT_demo', 'Hello mqtt');
        console.log('Message Sent');
    }, 5000);
});