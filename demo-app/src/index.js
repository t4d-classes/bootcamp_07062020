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

ReactDOM.render(
  // React.createElement(React.Fragement, null, React.createElement(ColorTool), React.createElement(CarTool)),
  <>
    <ColorTool colors={colorList} />
    <CarTool />
  </>,
  document.querySelector('#root'),
);
