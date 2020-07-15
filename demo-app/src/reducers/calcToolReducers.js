import { combineReducers } from 'redux';
import {
  ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION,
  DELETE_HISTORY_ENTRY_ACTION, CLEAR_ACTION,
} from '../actions/calcToolActions';

export const historyReducer = (history = [], action) => {

  if ([ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(action.type)) {
    return history.concat({
      id: Math.max(...history.map(he => he.id), 0) + 1,
      opName: action.type,
      opValue: action.payload.value,
    });
  }

  if (action.type === DELETE_HISTORY_ENTRY_ACTION) {
    return history.filter(he => he.id !== action.payload.historyEntryId);
  }

  if (action.type === CLEAR_ACTION) {
    return [];
  }

  return history;
};

export const calcToolReducer = combineReducers({
  history: historyReducer,
});
