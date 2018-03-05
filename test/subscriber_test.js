var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://172.17.0.2')

client.on('connect', function () {
    client.subscribe('IoT_demo')
})

client.on('message', function (topic, message) {
    context = message.toString();
    console.log(context)
})