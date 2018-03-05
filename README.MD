# DEMO BROKER MQTT

A tiny Node.js MQTT broker with Mosca

### Usage

``` bash
$ docker-compose up --build
```

will build with latest Node.js image, install npm dependencies and run broker

### Testing broker

first set your docker container IP in `test/publisher_test.js` and `test/subscriber_test.js`
``` javascript
var client = mqtt.connect('mqtt://PUT_YOUR_BROKER_IP_HERE');
```

and

``` bash
$ cd test/ && npm install
```

after installing dependencies : 

``` bash
$ node publisher_test.js
```
and in another terminal

``` bash
$ node subscriber_test.js
```