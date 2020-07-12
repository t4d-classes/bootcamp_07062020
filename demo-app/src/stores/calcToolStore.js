import { createStore } from 'redux';
import { calcReducer } from '../reducers/calcToolReducers';

export const calcStore = createStore(calcReducer);