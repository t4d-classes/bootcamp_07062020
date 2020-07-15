export const typeDefs = `
  type Query {
    message: String
    authors: [Author]
    author(authorId: ID): Author
    books: [Book]
    book(bookId: ID): Book
    colors: [Color]
    cars: [Car]
    car(carId: ID): Car
  }

  type Car {
    id: ID
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }

  type Color {
    id: ID
    name: String
    hexcode: String
  }

  type Book {
    id: ID
    title: String
    pageCount: Int
    price: Float
    author: Author
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    age: Int
    books: [Book]
  }
`;
