const chai = require('chai');

const { birthdays } = require('../../birthdaysService/providers/json');

const { assert } = chai;

describe('Unit test: birthdayService/providers/json.js', () => {
  it('should return birthdays', async () => {
    const config = {
      filename: './test/unit/data/birthdays.json'
    };
    const data = await birthdays(config);

    assert.deepEqual(data, [{ last_name: 'Doe',
                              first_name: 'John',
                              year: '1982',
                              month: '10',
                              day: '08',
                              email: 'john@foobar.com' },
                            { last_name: 'Ann',
                              first_name: 'Mary',
                              year: '1975',
                              month: '03',
                              day: '29',
                              email: 'mary@foobar.com' }]);
  });


  it('should throw if file not found', async () => {
    const config = {
      filename: './test/unit/data/notfound.json'
    };

    let throws = false;

    try {
      await birthdays(config)
    } catch (e) {
      throws = true;
    }

    assert.isTrue(throws);
  });
});
