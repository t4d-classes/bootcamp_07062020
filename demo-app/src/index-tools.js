import React from 'react';
import ReactDOM from 'react-dom';

import { CarToolProvider } from './context/carToolContext';
import { ColorToolProvider } from './context/colorToolContext';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

ReactDOM.render(
  <>
    <ColorToolProvider>
      <ColorTool />
    </ColorToolProvider>
    <CarToolProvider>
      <CarTool />
    </CarToolProvider>
  </>,
  document.querySelector('#root'),
);
