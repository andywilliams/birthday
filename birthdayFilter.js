const moment = require('moment');

exports.birthdayFilter = (birthdays = [], filterDay = moment()) => {
  const isLeapYear = moment([filterDay.year()]).isLeapYear();
  const current = birthdays.filter(birthday => {
    let day = parseInt(birthday.day);
    const month = parseInt(birthday.month);

    if(!isLeapYear && month === 2 && day === 29) {
      day = 28;
    }

    return month === (filterDay.month() + 1) &&
           day === filterDay.date();

  });

  return current;
};
