import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

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


const CalcTool = ({ result, onAdd: add, onSubtract: subtract }) => {

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
  }, useDispatch());

  return <CalcTool result={result} {...boundActions} />;

};

ReactDOM.render(
  <Provider store={calcStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);


