import React, { useState } from 'react';

import './ColorTool.css';

export const ColorTool = (props) => {

  const [
    colorForm, // state data
    setColorForm, // state update and re-render function
  ] = useState({
    name: '', hexcode: '',
  } /* initial state */);

  const change = (e) => {

    setColorForm({
      // object spread operator
      ...colorForm, // copy the properties of the original color form object to the new object

      // computed property
      [ e.target.name ]: e.target.value,
    });

    // colorForm[e.target.name] = e.target.value;

    // console.log(colorForm);

    // setColorForm(colorForm);

  };

  console.log(colorForm);

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
      <form>
        <div>
          <label htmlFor="name-input">Name:</label>
          <input type="text" id="name-input" name="name" value={colorForm.name} onChange={change} />
        </div>
        <div>
          <label htmlFor="hexcode-input">Hexcode:</label>
          <input type="text" id="hexcode-input" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </div>
      </form>
    </>
  );

};