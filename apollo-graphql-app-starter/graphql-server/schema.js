export const typeDefs = `
  type Query {
    message: String
    authors: [Author]
    author(authorId: ID): Author
    books: [Book]
    book(bookId: ID): Book
    colors: [Color]
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
