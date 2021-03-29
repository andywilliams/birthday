const bunyan = require('bunyan');

const config = require('./config');
const { name } = require('./package.json');

module.exports = bunyan.createLogger({ level: config.logger.level, name });
