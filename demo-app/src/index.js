import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';

const createAddAction = value => ({ type: ADD_ACTION, payload: { value } });
const createSubtractAction = value => ({ type: SUBTRACT_ACTION, payload: { value } });


const calcReducer = (state = { result: 0 }, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return { ...state, result: state.result + action.payload.value };
    case SUBTRACT_ACTION:
      return { ...state, result: state.result - action.payload.value };
    default:
      return state;
  }

};

const calcStore = createStore(calcReducer);



