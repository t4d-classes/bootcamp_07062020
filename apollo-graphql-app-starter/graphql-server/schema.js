export const typeDefs = `
  type Query {
    message: String
    authors: [Person]
  }

  type Person {
    id: ID
    firstName: String
    lastName: String
    age: Int
  }
`;
