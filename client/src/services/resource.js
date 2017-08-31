import { List } from 'immutable';
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

const getResources = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/person`);
    const data = new List(response.data);
    return data;
  } catch (error) {
    return error;
  }
};

const addResource = async resource => {
  try {
    console.log(resource);
  } catch (error) {
    console.error(error);
  }
};

const delResource = async id => {
  try {
    console.log(id);
  } catch (error) {
    console.error(error);
  }
};

export default {
  createResource,
  getResources,
  addResource,
  delResource,
};
