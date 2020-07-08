import React from 'react';

import { carPropTypes } from '../propTypes/cars';

import { nanToValue } from '../utils';

export const CarViewRow = ({ car }) => {

  return (
    <tr>
      <td>{car.id}</td>
      <td className="text">{car.make}</td>
      <td className="text">{car.model}</td>
      <td>{nanToValue(car.year)}</td>
      <td>{car.color}</td>
      <td className="number">{nanToValue(car.price)}</td>
    </tr>
  );

};

CarViewRow.propTypes = {
  car: carPropTypes,
};