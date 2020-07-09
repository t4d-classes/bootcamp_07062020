import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { carPropTypes } from '../propTypes/cars';

import { valueToNaN } from '../utils';
import { NumberInput } from './NumberInput';

export const CarEditRow = ({
  car,
  onSaveCar,
  onCancelCar: cancelCar,
}) => {

  const [ carForm, setCarForm ] = useState({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

  const change = (e) => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? valueToNaN(e.target.value)
        : e.target.value,
    });
  };

  const saveCar = () => {
    onSaveCar({
      ...carForm,
      id: car.id,
    });
  };
  
  return (
    <tr>
      <td>{car.id}</td>
      <td><input type="text" name="make" value={carForm.make} onChange={change} /></td>
      <td><input type="text" name="model" value={carForm.model} onChange={change} /></td>
      <td><NumberInput name="year" value={carForm.year} onChange={change} /></td>
      <td><input type="text" name="color" value={carForm.color} onChange={change} /></td>
      <td><NumberInput name="price" value={carForm.price} onChange={change} /></td>
      <td>
        <button type="button"
          onClick={saveCar}>Save</button>
        <button type="button"
          onClick={cancelCar}>Cancel</button>
      </td>
    </tr>
  );

};

CarEditRow.propTypes = {
  car: carPropTypes,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};