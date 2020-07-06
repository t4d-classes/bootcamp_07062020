import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {

  return React.createElement('h1', null, 'Hello World!');

};

ReactDOM.render(
  React.createElement(HelloWorld),
  document.querySelector('#root' /* select an element whose ID is 'root' */),
);


// // function declaration
// function HelloWorld() {

// }

// // function expression
// // functions are objects
// const HelloWorld2 = function() {

// };

// // arrow function
// const HelloWorld3 = () => {

// };


