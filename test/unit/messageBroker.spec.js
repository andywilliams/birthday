const chai = require('chai');

const { send } = require('../../messageBroker');

const { assert } = chai;

describe('Unit test: birthdayService/messageBroker', () => {
  it('should send messages', async () => {
    const birthdays = [{ last_name: 'Doe',
                         first_name: 'John',
                         year: '1982',
                         month: '10',
                         day: '08',
                         email: 'john@foobar.com' }];

    let callCount = 0;
    const brokers = [
      {
        send: birthday => {
          callCount += 1;
        }
      }
    ];

    await send(birthdays, brokers);

    assert.equal(1, callCount);
  });
});
