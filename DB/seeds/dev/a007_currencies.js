const faker = require('faker');
const moment = require('moment');

 
const createFakeCurrencies = () => ({
  creationDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  currency: faker.finance.currencyName(),
});

exports.seed = async function (knex) {
  const fakeCurrencies = [];
  const desiredFakeCurrencies = 3;

  for (let i = 0; i < desiredFakeCurrencies; i++) {
    fakeCurrencies.push(createFakeCurrencies());
  }

  await knex('currencies').insert(fakeCurrencies);
};
