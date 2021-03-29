const fs = require('fs').promises;
const Database = require('sqlite-async')
const config = require('../../config');

exports.type = 'sqlite';

exports.birthdays = async () => {
  const db = await Database.open(`${config.sqlite.filename}`);

  const data = await db.all('SELECT * FROM birthdays;');

  await db.close();
  return data;
};
