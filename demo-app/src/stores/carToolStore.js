import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { carReducer } from '../reducers/carToolReducers';

export const carToolStore = createStore(
  carReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
