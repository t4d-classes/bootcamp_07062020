// default import
import React from 'react';
import ReactDOM from 'react-dom';

// named import
import { Profile } from './components/Profile';

ReactDOM.render(
  // React.createElement(HelloWorld),
  <Profile />,
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


