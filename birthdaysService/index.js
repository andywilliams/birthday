const { find } = require('lodash');
const { dataStore } = require('../config');
const logger = require('../logger');
const providers = [
  require('./providers/csv'),
  require('./providers/json'),
  require('./providers/sqlite')
];

const provider = find(providers, provider => provider.type === dataStore);

exports.getBirthdays = async () => {
  return await provider.birthdays();
};
