import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

ReactDOM.render(
  // React.createElement(React.Fragement, null, React.createElement(ColorTool), React.createElement(CarTool)),
  <>
    <ColorTool />
    <CarTool />
  </>,
  document.querySelector('#root'),
);
