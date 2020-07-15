import { combineReducers } from "redux";

import {
  EDIT_CAR_ACTION, CANCEL_CAR_ACTION, REFRESH_CARS_DONE_ACTION,
} from '../actions/carToolActions';

export const carsReducer = (cars = [], action) => {

  if (action.type === REFRESH_CARS_DONE_ACTION) {
    return action.cars;
  }

  return cars;

};

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.carId;
  }

  if ([
    CANCEL_CAR_ACTION,
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

export const carToolReducer = combineReducers({
  isLoading: isLoadingReducer,
  cars: carsReducer,
  editCarId: editCarIdReducer,
});