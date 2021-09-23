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

const createFakeCountry = (i) => ({
  creationDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  country: faker.address.country(),
  code: i,
});

exports.seed = async function (knex) {
  const fakeCountries = [];
  const desiredFakeCountries = 50;

  for (let i = 0; i < desiredFakeCountries; i += 1) {
    fakeCountries.push(createFakeCountry(i));
  }

  await knex('countries').insert(fakeCountries);
};
 
