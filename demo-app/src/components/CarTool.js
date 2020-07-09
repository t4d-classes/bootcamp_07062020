import React, { useState } from 'react';


import "./CarTool.css";

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const [ cars, setCars ] = useState(props.cars.concat());
  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = (car) => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
    setEditCarId(-1);
  };

  const saveCar = (car) => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = cars.concat();
    newCars[carIndex] = car; // replace old car with a new one
    setCars(newCars);
    setEditCarId(-1);
  };

  const deleteCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
    setEditCarId(-1);
  };

  return (
    <div className="car-tool">
      <ToolHeader headerText="Car Tool" />
      {/* React.createElement(CarTable, { cars: cars }); */}
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={() => setEditCarId(-1)} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </div>
  );

};