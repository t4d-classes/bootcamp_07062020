import React from 'react';

import { carsPropTypes } from '../propTypes/cars';
import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

export const CarTable = ({
  cars, editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {!cars.length
          ? <tr><td colSpan="6">There are no cars.</td></tr>
          : cars.map(car => car.id === editCarId
              ? <CarEditRow key={car.id} car={car}
                  onSaveCar={() => null} onCancelCar={() => null} />
              : <CarViewRow key={car.id} car={car}
                  onEditCar={editCar} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>
  );

};

CarTable.defaultProps = {
  cars: [],
};

CarTable.propTypes = {
  cars: carsPropTypes,
};