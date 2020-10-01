// anytime we want to use Redis, we will use this host and port configs environment variables
module.exports = {
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT
};