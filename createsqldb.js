const Database = require('sqlite-async');
const config = require('./config');

const create = async () => {
  const db = await Database.open(`${config.sqlite.filename}`);

  await db.run('CREATE TABLE IF NOT EXISTS birthdays (last_name TEXT, first_name TEXT, day TEXT, month TEXT, year TEXT, email TEXT);');

  await db.run(`INSERT INTO birthdays (last_name, first_name, day, month, year, email) VALUES ('doe', 'jane', '29', '03', '1977', 'jane@domain.com');`);

  await db.close();
};

create().then(() => process.exit());
