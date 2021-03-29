const moment = require('moment');
const chai = require('chai');

const { birthdayFilter } = require('../../birthdayFilter');

const { assert } = chai;

describe('Unit test: birthdayFilter.js', () => {
  it('should return empty list when no birthdays are passed', () => {
    const filtered = birthdayFilter();

    assert.deepEqual(filtered, []);
  });

  it('should return empty list when no birthdays match date', () => {
    const birthdays = [{
      day: '10',
      month: '07'
    }];

    const date = moment('2021-01-01');
    const filtered = birthdayFilter(birthdays, date);

    assert.deepEqual(filtered, []);
  });

  it('should return birthdays which match date', () => {
    const birthdays = [{
      day: '10',
      month: '07'
    }];

    const date = moment('2021-07-10');
    const filtered = birthdayFilter(birthdays, date);

    assert.deepEqual(filtered, [{ day: '10', month: '07' }]);
  });

  it('should return leap year birthdays on 29th when it is a leap year', () => {
    const birthdays = [{
      day: '29',
      month: '02'
    }];

    const date = moment('2000-02-29');
    const filtered = birthdayFilter(birthdays, date);

    assert.deepEqual(filtered, [{ day: '29', month: '02' }]);
  });

  it('should return leap year birthdays on 28th when it is not a leap year', () => {
    const birthdays = [{
      day: '29',
      month: '02'
    }];

    const date = moment('2001-02-28');
    const filtered = birthdayFilter(birthdays, date);

    assert.deepEqual(filtered, [{ day: '29', month: '02' }]);
  });
});
