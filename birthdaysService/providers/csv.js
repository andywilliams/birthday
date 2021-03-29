const fs = require('fs').promises;
const parse = require('csv-parse/lib/sync');
const config = require('../../config');

exports.type = 'csv';

exports.birthdays = async csvConfig => {
  if(!csvConfig) {
    csvConfig = config.csv;
  }
  const fileContent = await fs.readFile(`${__dirname}/../../${csvConfig.filename}`);
  const birthdays = parse(fileContent, {columns: true});

  return birthdays;
};
