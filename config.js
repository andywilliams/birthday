const config = {
  messageBrokers: ['console'],
  dataStore: 'sqlite',
  csv: {
    filename: './data/birthdays.csv',
  },
  json: {
    filename: './data/birthdays.json',
  },
  sqlite: {
    filename: './data/birthdays.db',
  },
  logger: {
    level: 'debug',
  },
};

module.exports = config;
