export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';

export const ADD_CAR_ACTION = 'ADD_CAR';
export const SAVE_CAR_ACTION = 'SAVE_CAR';
export const DELETE_CAR_ACTION = 'DELETE_CAR';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';

export const createRefreshCarsRequestAction = () => ({
  type: REFRESH_CARS_REQUEST_ACTION,
});

export const createRefreshCarsDoneAction = cars => ({
  type: REFRESH_CARS_DONE_ACTION,
  cars,
});

export const refreshCars = () => {

  return dispatch => {

    dispatch(createRefreshCarsRequestAction());
    return fetch('http://localhost:3060/cars')
      .then(res => res.json())
      .then(cars => dispatch(createRefreshCarsDoneAction(cars)));

  };

};

export const createAddCarAction = car =>
  ({ type: ADD_CAR_ACTION, car });
export const createSaveCarAction = car =>
  ({ type: SAVE_CAR_ACTION, car });
export const createDeleteCarAction = carId =>
  ({ type: DELETE_CAR_ACTION, carId });
export const createEditCarAction = carId =>
  ({ type: EDIT_CAR_ACTION, carId });
export const createCancelCarAction = () =>
  ({ type: CANCEL_CAR_ACTION });