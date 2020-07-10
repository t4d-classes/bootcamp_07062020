import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const MULTIPLY_ACTION = 'MULTIPLY';
const DIVIDE_ACTION = 'DIVIDE';

const createAddAction = value => ({ type: ADD_ACTION, payload: { value } });
const createSubtractAction = value => ({ type: SUBTRACT_ACTION, payload: { value } });
const createMultiplyAction = value => ({ type: MULTIPLY_ACTION, payload: { value } });
const createDivideAction = value => ({ type: DIVIDE_ACTION, payload: { value } });


const calcReducer = (state = { result: 0 }, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return { ...state, result: state.result + action.payload.value };
    case SUBTRACT_ACTION:
      return { ...state, result: state.result - action.payload.value };
    case MULTIPLY_ACTION:
      return { ...state, result: state.result * action.payload.value };
    case DIVIDE_ACTION:
      return { ...state, result: state.result / action.payload.value };
    default:
      return state;
  }

};

const calcStore = createStore(calcReducer);


const CalcTool = ({
  result,
  onAdd: add, onSubtract: subtract,
  onMultiply: multiply, onDivide: divide,
}) => {

  const [ num, setNum ] = useState(0);

  return (
    <form>
      <div>
        Result: {result}
      </div>
      <div>
        Num: <input type="number" value={num} onChange={e => setNum(Number(e.target.value))} />
      </div>
      <fieldset>
        <button type="button" onClick={() => add(num)}>+</button>
        <button type="button" onClick={() => subtract(num)}>-</button>
        <button type="button" onClick={() => multiply(num)}>*</button>
        <button type="button" onClick={() => divide(num)}>/</button>
      </fieldset>
    </form>
  );

};

const CalcToolContainer = () => {

  const result = useSelector(state => state.result);

  // const onAdd = value => dispatch(createAddAction(value));

  const boundActions = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
    onMultiply: createMultiplyAction,
    onDivide: createDivideAction,
  }, useDispatch());

  return <CalcTool result={result} {...boundActions} />;

};

ReactDOM.render(
  <Provider store={calcStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);


