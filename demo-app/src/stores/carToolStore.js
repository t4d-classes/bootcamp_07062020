import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { carReducer } from '../reducers/carToolReducers';

export const carToolStore = createStore(carReducer, composeWithDevTools());