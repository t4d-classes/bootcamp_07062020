import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { colorReducer } from '../reducers/colorToolReducers';

export const colorToolStore = createStore(colorReducer, composeWithDevTools());