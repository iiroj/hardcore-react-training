import uuid from 'uuid';
import faker from 'faker';

const createPerson = () => {
  return {
    id: uuid(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
  };
};

export default {
  createPerson,
};
