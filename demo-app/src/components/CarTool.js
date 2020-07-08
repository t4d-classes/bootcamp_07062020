import React, { useState } from 'react';

import { valueToNaN } from '../utils';

import "./CarTool.css";

import {
  StringFormControl,
  NumberFormControl,
} from './FormControls';



export const CarTool = (props) => {

  const [ cars, setCars ] = useState(props.cars.concat());

  const [ carForm, setCarForm ] = useState({
    make: '',
    model: '',
    year: NaN,
    color: '',
    price: NaN,
  });

  const change = (e) => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? valueToNaN(e.target.value)
        : e.target.value,
    });
  };

  const addCar = () => {

    setCars(cars.concat({
      ...carForm,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));

    setCarForm({
      make: '',
      model: '',
      year: NaN,
      color: '',
      price: NaN,
    });

  };

  return (
    <div className="car-tool">
      <header>
        <h1>Car Tool</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => <tr key={car.id}>
            <td>{car.id}</td>
            <td className="text">{car.make}</td>
            <td className="text">{car.model}</td>
            <td>{car.year}</td>
            <td>{car.color}</td>
            <td className="number">{car.price}</td>
          </tr>)}
        </tbody>
      </table>
      <form>
        <StringFormControl caption="Make" name="make"
          value={carForm.make} onChange={change} />
        <StringFormControl caption="Model" name="model"
          value={carForm.model} onChange={change} />
        <NumberFormControl caption="Year" name="year"
          value={carForm.year} onChange={change} />
        <StringFormControl caption="Color" name="color"
          value={carForm.color} onChange={change} />
        <NumberFormControl caption="Price" name="price"
          value={carForm.price} onChange={change} />
        <button type="button" onClick={addCar}>Add Car</button>
      </form>
    </div>
  );

};