import React, { useState } from 'react';

import './ColorTool.css';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState(props.colors.concat());

  const [
    colorForm, // state data
    setColorForm, // state update and re-render function
  ] = useState({
    name: '', hexcode: '',
  } /* initial state */);

  const change = (e) => {

    setColorForm(/* creating a new object -> */ {
      // object spread operator
      ...colorForm, // copy the properties of the original color form object to the new object
      // name: colorForm.name,
      // hexcode: colorForm.hexcode,

      // computed property
      [ e.target.name ]: e.target.value,
    });

    // colorForm[e.target.name] = e.target.value;

    // console.log(colorForm);

    // setColorForm(colorForm);

  };

  const addColor = () => {

    // adding a color to a new array of colors and setting the colors state to point to the new array
    setColors(colors.concat({
      ...colorForm,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }));

    // resetting the form to be blank
    setColorForm({
      name: '', hexcode: '',
    });

  };

  return (
    <div className="color-tool">
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map( color => <li key={color.id}>
          {color.name}
        </li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="name-input">Name</label>
          <input type="text" id="name-input" name="name" value={colorForm.name} onChange={change} />
        </div>
        <div>
          <label htmlFor="hexcode-input">Hexcode</label>
          <input type="text" id="hexcode-input" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </div>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </div>
  );

};