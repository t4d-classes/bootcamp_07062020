import { combineReducers } from "redux";

import {
  SAVE_CAR_ACTION, DELETE_CAR_ACTION,
  EDIT_CAR_ACTION, CANCEL_CAR_ACTION, REFRESH_CARS_DONE_ACTION,
} from '../actions/carToolActions';

// const initialCars = [
//   { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
//   { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 125000 },
// ];

export const carsReducer = (cars = [], action) => {

  switch (action.type) {
    case REFRESH_CARS_DONE_ACTION:
      return action.cars;
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
    SAVE_CAR_ACTION,
    DELETE_CAR_ACTION, CANCEL_CAR_ACTION,
    REFRESH_CARS_DONE_ACTION,
  ].includes(action.type)) {
    return -1;
  }

  return editCarId;

};

export const isLoadingReducer = (isLoading = false, action) => {

  if (action.type.endsWith('_REQUEST')) {
    return true;
  }

  if (action.type.endsWith('_DONE')) {
    return false;
  }

  return isLoading;
};

export const carReducer = combineReducers({
  isLoading: isLoadingReducer,
  cars: carsReducer,
  editCarId: editCarIdReducer,
});