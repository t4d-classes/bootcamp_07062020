import { combineReducers } from 'redux';

import { REFRESH_COLORS_DONE_ACTION } from '../actions/colorToolActions';

export const colorsReducer = (colors = [], action) => {

  if (action.type === REFRESH_COLORS_DONE_ACTION) {
    return action.colors;
  }

  return colors;
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

export const colorToolReducer = combineReducers({
  isLoading: isLoadingReducer,
  colors: colorsReducer,
});