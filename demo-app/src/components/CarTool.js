import React from 'react';

import { useCarToolContext } from '../context/carToolContext';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

import "./CarTool.css";

export const CarTool = () => {

  const {
    cars, editCarId,
    addCar, saveCar, deleteCar,
    editCar, cancelCar,
  } = useCarToolContext();

  return (
    <div className="car-tool">
      <ToolHeader headerText="Car Tool" />
      {/* React.createElement(CarTable, { cars: cars }); */}
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </div>
  );

};