import uuid from 'uuid';
import faker from 'faker';
import axios from 'axios';

import random from '../utils/random';

const createResource = () => {
  return {
    id: uuid(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    age: random.integer(19, 70),
    gender: random.pick(['m', 'f']),
  };
};

const getResources = async () => await axios.get(`${process.env.REACT_APP_API}/person`).then(ret => ret.data);

const delResource = id => console.log(id);

export default {
  createResource,
  getResources,
  delResource,
};
