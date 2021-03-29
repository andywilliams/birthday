const config = {
  messageBrokers: ['console'],
  dataStore: 'csv',
  csv: {
    filename: './data/birthdays.csv',
  },
  json: {
    filename: './data/birthdays.json',
  },
  logger: {
    level: 'debug',
  },
};

module.exports = config;
