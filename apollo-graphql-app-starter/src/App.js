import * as React from 'react';
import { useQuery, useMutation } from 'react-apollo';
import gql from 'graphql-tag';

import { ToolHeader } from './components/ToolHeader';
import { CarTable } from './components/CarTable';
import { CarForm } from './components/CarForm';

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
    headerText
    cars {
      id
      make
      model
      year
      color
      price
    }
  }
`;

const APPEND_CAR_MUTATION = gql`
  mutation AppendCar($car: AppendCar) {
    appendCar(car: $car) {
      id
      make
      model
      year
      color
      price
    }
  }
`;

export const App = () => {
  const { loading, data, error } = useQuery(APP_QUERY, { variables: { authorId: 2 } });

  const [ mutateAppendCar ] = useMutation(APPEND_CAR_MUTATION);

  const appendCar = (car) => {

    mutateAppendCar({
      variables: { car },
      // refetchQueries: [ { query: APP_QUERY, variables: { authorId: 2 } } ],
      optimisticResponse: {
        appendCar: {
          ...car,
          id: -1,
          __typename: 'Car',
        },
      },
      update(store, mutationResult) {

        // called twice
        // first time is with optimistic
        // second time is with real result
        console.log(mutationResult);

        const data = store.readQuery({ query: APP_QUERY, variables: { authorId: 2 } });
        data.cars = data.cars.concat(mutationResult.data.appendCar);
        store.writeQuery({ query: APP_QUERY, variables: { authorId: 2 }, data });
      }
    });

  };

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

    <ToolHeader headerText={data.headerText} />
    <CarTable cars={data.cars} />
    <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
  </>;
};
