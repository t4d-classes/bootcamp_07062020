import * as React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const APP_QUERY = gql`
  query AppQuery($authorId: ID) {
    message
    colors {
      id
      name
      hexcode
    }
    author(authorId: $authorId) {
      id
      firstName
      age
    }
  }
`;

export const App = () => {
  const { loading, data, error } = useQuery(APP_QUERY, { variables: { authorId: 2 } });

  if (loading) {
    return <div>Loading!</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return <>
    <h1>{data.message}</h1>
    <ul>
      {data.colors.map(color => <li key={color.id}>{color.name}</li>)}
    </ul>
    <div>
      First Name: {data.author.firstName}, Age: {data.author.age}
    </div>
  </>;
};
