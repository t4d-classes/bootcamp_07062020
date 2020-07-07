import React from 'react';

import './ColorTool.css';

export const ColorTool = () => {

  const colors = [
    { id: 1, name: 'aquamarine', hexcode: '6BCAE2' },
    { id: 2, name: 'neon pink', hexcode: 'FF6EC7' },
    { id: 3, name: 'black', hexcode: '000000' },
    { id: 4, name: 'blue', hexcode: '0000FF' },
  ];

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map( color => <li key={color.id}>
          {color.name}
        </li>)}
      </ul>
    </>
  );

};