import React, { useState } from 'react';


import "./CarTool.css";

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const [ cars, setCars ] = useState(props.cars.concat());

  const addCar = (car) => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
  };

  return (
    <div className="car-tool">
      <ToolHeader headerText="Car Tool" />
      {/* React.createElement(CarTable, { cars: cars }); */}
      <CarTable cars={cars} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </div>
  );

};