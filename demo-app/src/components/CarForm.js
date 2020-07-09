import React from 'react';
import PropTypes from 'prop-types';

import {
  StringFormControl,
  NumberFormControl,
} from './FormControls';
import { useForm } from '../hooks/useForm';

export const CarForm = ({ buttonText, onSubmitCar }) => {

  const [ carForm, change, resetCarForm ] = useForm({
    make: '',
    model: '',
    year: NaN,
    color: '',
    price: NaN,
  });

  const submitCar = () => {
    onSubmitCar(carForm);
    resetCarForm();
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