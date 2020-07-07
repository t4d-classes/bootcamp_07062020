import React from 'react';

import './ColorTool.css';

export const ColorTool = (props) => {



  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {props.colors.map( color => <li key={color.id}>
          {color.name}
        </li>)}
      </ul>
    </>
  );

};