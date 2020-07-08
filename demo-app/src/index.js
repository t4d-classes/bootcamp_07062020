import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'aquamarine', hexcode: '6BCAE2' },
  { id: 2, name: 'neon pink', hexcode: 'FF6EC7' },
  { id: 3, name: 'black', hexcode: '000000' },
  { id: 4, name: 'blue', hexcode: '0000FF' },
];

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'red', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 120000 },
  { id: 3, make: 'Nissan', model: 'Pathfinder', year: 2018, color: 'red', price: 40000 },
  { id: 4, make: 'Chevrolet', model: 'Volt', year: 2017, color: 'green', price: 50000 },
];

ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);
