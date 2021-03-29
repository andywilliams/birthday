exports.type = 'console';

exports.send = birthday => {
  console.log('Subject: Happy Birthday!');
  console.log();
  console.log(`Happy birthday, dear ${birthday.first_name}`);
};
