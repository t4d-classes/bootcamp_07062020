import React from 'react';

import { carPropTypes } from '../propTypes/cars';

import { nanToValue } from '../utils';

export const CarViewRow = ({
  car,
  onEditCar,
  onDeleteCar,
}) => {
  
  return (
    <tr>
      <td>{car.id}</td>
      <td className="text">{car.make}</td>
      <td className="text">{car.model}</td>
      <td>{nanToValue(car.year)}</td>
      <td>{car.color}</td>
      <td className="number">{nanToValue(car.price)}</td>
      <td>
        <button type="button"
          onClick={() => onEditCar(car.id)}>Edit</button>
        <button type="button"
          onClick={() => onDeleteCar(car.id)}>Delete</button>
      </td>
    </tr>
  );

};

CarViewRow.propTypes = {
  car: carPropTypes,
};