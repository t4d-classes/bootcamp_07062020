import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  StringFormControl,
  NumberFormControl,
} from './FormControls';

import { valueToNaN } from '../utils';

export const CarForm = ({ buttonText, onSubmitCar }) => {

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

  const submitCar = () => {
    onSubmitCar(carForm);
    setCarForm({
      make: '',
      model: '',
      year: NaN,
      color: '',
      price: NaN,
    });
  };
  return (
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
      <button type="button" onClick={submitCar}>{buttonText}</button>
    </form>
  )

};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};

CarForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmitCar: PropTypes.func.isRequired,
};