import React from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

import "./CarTool.css";

export const CarTool = ({
  cars, editCarId,
  onAddCar: addCar, onSaveCar: saveCar,
  onDeleteCar: deleteCar, onEditCar: editCar,
  onCancelCar: cancelCar,
}) => {

  return (
    <div className="car-tool">
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </div>
  );

};