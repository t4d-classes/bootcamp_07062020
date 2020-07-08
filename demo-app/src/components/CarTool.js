import React, { useState } from 'react';

import { valueToNaN } from '../utils';

import "./CarTool.css";

import {
  StringFormControl,
  NumberFormControl,
} from './FormControls';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';



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
      <ToolHeader headerText="Car Tool" />
      {/* React.createElement(CarTable, { cars: cars }); */}
      <CarTable cars={cars} />
      <form>
        {/*
          
          React.createElement(StringFormControl, { 
            caption: 'Make', name: 'make',
            value: carForm.make, onChange: change,
          });
        
        */}
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