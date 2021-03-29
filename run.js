const config = require('./config');
const logger = require('./logger');
const { getBirthdays } = require('./birthdaysService');
const { birthdayFilter } = require('./birthdayFilter');
const { send } = require('./messageBroker');

logger.info(`Birthday message service`);
logger.info(`Data store: ${config.dataStore}`);
logger.info(`Message brokers: ${config.messageBrokers}`);

exports.run = async () => {
  const birthdays = await getBirthdays();

  const currentBirthdays = birthdayFilter(birthdays);

  await send(currentBirthdays);
};
