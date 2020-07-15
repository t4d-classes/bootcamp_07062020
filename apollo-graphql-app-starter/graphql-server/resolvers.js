import fetch from 'node-fetch';

const authors = [
  { id: 1, firstName: 'Bob', lastName: 'Smith', age: 34 },
  { id: 2, firstName: 'Alice', lastName: 'Thompkins', age: 23 },
  { id: 3, firstName: 'Tim', lastName: 'Johnson', age: 56 },
];

export const resolvers = {
  Query: {
    message: () => 'Hello World!',
    authors: () => authors,
  },
};
