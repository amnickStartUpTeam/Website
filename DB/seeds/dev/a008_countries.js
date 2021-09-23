const faker = require('faker');
const moment = require('moment');

/*
function isNotBIO() {
  let country = faker.address.country();

  while (country === 'British Indian Ocean Territory (Chagos Archipelago)') {
    country = faker.address.country();
  }

  return country;
} */

const createFakeCountry = () => ({
  creationDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  country: faker.address.country(),
  code: faker.datatype.number({ min: 1, max: 99 }),
  currencyId: faker.datatype.float({ min: 1, max: 3 }),
});

exports.seed = async function (knex) {
  const fakeCountries = [];
  const desiredFakeCountries = 50;

  for (let i = 0; i < desiredFakeCountries; i += 1) {
    fakeCountries.push(createFakeCountry());
  }

  await knex('countries').insert(fakeCountries);
};
 