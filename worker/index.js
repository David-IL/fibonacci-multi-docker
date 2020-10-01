const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000 // in [ms]
});

// subscription - watch redis and get message every time new value shows up
const sub = redisClient.duplicate();

function fib(index) {
    // recursive solution which is slow...
    if (index < 2) return 1;
    return fib(index - 1) + fib(index - 2);
};

// every time we get a new message do this:
sub.on('message', (channel, message) => {
    redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert'); // everytime someone inserts into redis