const fs = require('fs').promises;
const parse = require('csv-parse/lib/sync');
const config = require('../../config');

exports.type = 'json';

exports.birthdays = async jsonConfig => {
  if(!jsonConfig) {
    jsonConfig = config.json;
  }
  const birthdays = require(`${__dirname}/../../${jsonConfig.filename}`);

  return birthdays;
};
