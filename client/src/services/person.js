import uuid from 'uuid';
import faker from 'faker';
import random from '../utils/random';

const createPerson = () => {
  return {
    id: uuid(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    age: random.integer(19, 70),
    gender: random.pick(['m', 'f']),
  };
};

export default {
  createPerson,
};
