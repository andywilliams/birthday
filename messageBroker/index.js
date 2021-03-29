const { filter } = require('lodash');
const { messageBrokers } = require('../config');
const providers = [
  require('./providers/console')
];

exports.send = (birthdays = [], brkrs) => {
  const promises = [];

  const brokers = brkrs || filter(providers, provider => messageBrokers.includes(provider.type));

  birthdays.forEach(birthday => {
    brokers.forEach(broker => {
      promises.push(broker.send(birthday));
    });
  });

  return Promise.all(promises);
};
