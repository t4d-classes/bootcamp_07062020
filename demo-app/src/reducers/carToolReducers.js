import { combineReducers } from "redux";

import {
  ADD_CAR_ACTION, SAVE_CAR_ACTION, DELETE_CAR_ACTION,
  EDIT_CAR_ACTION, CANCEL_CAR_ACTION,
} from '../actions/carToolActions';

const initialCars = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 125000 },
];

export const carsReducer = (cars = initialCars, action) => {

  switch (action.type) {
    case ADD_CAR_ACTION:
      return cars.concat({
        ...action.car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      });
    case SAVE_CAR_ACTION:
      const carIndex = cars.findIndex(c => c.id === action.car.id);
      const newCars = cars.concat();
      newCars[carIndex] = action.car;
      return newCars;
    case DELETE_CAR_ACTION:
      return cars.filter(c => c.id !== action.carId);
    default:
      return cars;
  }

};

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.carId;
  }

  if ([
    ADD_CAR_ACTION, SAVE_CAR_ACTION,
    DELETE_CAR_ACTION, CANCEL_CAR_ACTION
  ].includes(action.type)) {
    return -1;
  }

  return editCarId;

};

export const carReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
});