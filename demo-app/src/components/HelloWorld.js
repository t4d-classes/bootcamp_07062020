import React from 'react';

export const HelloWorld = () => {

  // return React.createElement('div', null,
  //   React.createElement('h1', null, 'Hello World!'),
  //   React.createElement('span', null, 'test'),
  // );

  // two top-level siblings, wrap them in a fragment
  return (
    <>
      <h1 className="primary">Hello World!</h1>
      <h1 className="primary message">This is fun!</h1>
      <span>test</span>
    </>
  );

};