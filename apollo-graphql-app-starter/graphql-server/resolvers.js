import fetch from 'node-fetch';


const books = [
  { id: 1, title: 'Book 1', pageCount: 234, price: 4.56, authorId: 1 },
  { id: 2, title: 'Book 2', pageCount: 235, price: 5.56, authorId: 2 },
  { id: 3, title: 'Book 3', pageCount: 236, price: 6.56, authorId: 2 },
  { id: 4, title: 'Book 4', pageCount: 238, price: 7.56, authorId: 3 },
  { id: 5, title: 'Book 5', pageCount: 239, price: 8.56, authorId: 3 },
];

const authors = [
  { id: 1, firstName: 'Bob', lastName: 'Smith', age: 34, bookIds: [1] },
  { id: 2, firstName: 'Alice', lastName: 'Thompkins', age: 23, bookIds: [2,3] },
  { id: 3, firstName: 'Tim', lastName: 'Johnson', age: 56, bookIds: [4,5] },
];

export const resolvers = {
  Query: {
    headerText: () => 'Car Tool',
    message: () => 'Hello World!',
    authors: () => authors,
    author: (_, { authorId }) => {
      return authors.find(a => a.id === Number(authorId));
    },
    books: () => books,
    colors: () => fetch('http://localhost:3040/colors')
      .then(res => res.json()),
    cars: () => fetch('http://localhost:3040/cars')
      .then(res => res.json()),
    car: (_, { carId }) => {
      // return fetch('http://localhost:3040/cars/' + carId)
      //   .then(res => res.json());
      return fetch('http://localhost:3040/cars')
        .then(res => res.json())
        .then(cars => cars.find(c => c.id === Number(carId)));
    }
  },
  Mutation: {
    appendCar: (_, { car }, { restURL }) => {
      return fetch(`${restURL}/cars`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
      })
        .then(res => res.json());
    },
    deleteCar: async (_, { carId }, { restURL }) => {

      // const res = await fetch(`${restURL}/cars/${encodeURIComponent(carId)}`);
      // const car = await res.json();

      // await fetch(`${restURL}/cars/${encodeURIComponent(carId)}`, { method: 'DELETE' });

      return fetch(`${restURL}/cars/${encodeURIComponent(carId)}`, { method: 'DELETE' })
        .then(() => carId);
      // return car.id;
    },
  },
  Book: {
    // default impl
    // id: (book) => book.id,
    author: (book) => authors.find(a => a.id === book.authorId),
  },
  Author: {
    books: (author) => books.filter(b => author.bookIds.includes(b.id)),
  }
};

// const base64Encode = (value) => {
//   let buff = new Buffer(value);
//   return buff.toString('base64');
// };


// export const resolvers = {
//   Query: {
//     message: () => 'Hello World!',
//     authors: () => authors.map(a => {

//       const r = Object.assign({}, a, {
//         id: base64Encode('Person:' + a.id),
//       });

//       return r;
//     }),
//     author: (_, { authorId }) => {
//       return authors.find(a => a.id === Number(authorId));
//     },
//   },
// };