import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators, combineReducers } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const MULTIPLY_ACTION = 'MULTIPLY';
const DIVIDE_ACTION = 'DIVIDE';
const CLEAR_ACTION = 'CLEAR';
const DELETE_HISTORY_ENTRY_ACTION = 'DELETE_HISTORY_ENTRY';

const createAddAction = value => ({ type: ADD_ACTION, payload: { value } });
const createSubtractAction = value => ({ type: SUBTRACT_ACTION, payload: { value } });
const createMultiplyAction = value => ({ type: MULTIPLY_ACTION, payload: { value } });
const createDivideAction = value => ({ type: DIVIDE_ACTION, payload: { value } });
const createClearAction = () => ({ type: CLEAR_ACTION });
const createDeleteHistoryEntryAction = historyEntryId =>
  ({
    type: DELETE_HISTORY_ENTRY_ACTION,
    payload: { historyEntryId },
  });

// reducer - pure function
// 1. the only data they can use is passed in via parameters
// 2. you cannot mutate the parameters
// 3. no side effects
// 4. the only output is the return value

const resultReducer = (result = 0, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return result + action.payload.value;
    case SUBTRACT_ACTION:
      return result - action.payload.value;
    case MULTIPLY_ACTION:
      return result * action.payload.value;
    case DIVIDE_ACTION:
      return result / action.payload.value;
    case CLEAR_ACTION:
      return 0;
    default:
      return result;
  }
};

const historyReducer = (history = [], action) => {

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

const calcReducer = combineReducers({
  result: resultReducer,
  history: historyReducer,
});

const calcStore = createStore(calcReducer);


const CalcTool = ({
  result, history,
  onAdd: add, onSubtract: subtract,
  onMultiply: multiply, onDivide: divide,
  onClear, onDeleteHistoryEntry: deleteHistoryEntry,
}) => {

  const [ num, setNum ] = useState(0);

  const clear = () => {
    setNum(0);
    onClear();
  };

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
        <button type="button" onClick={clear}>Clear</button>
      </fieldset>
      <ul>
        {history.map(historyEntry => <li key={historyEntry.id}>
          {historyEntry.opName} - {historyEntry.opValue}
          <button type="button" onClick={() => deleteHistoryEntry(historyEntry.id)}>X</button>
        </li>)}
      </ul>
    </form>
  );

};

const CalcToolContainer = () => {

  const result = useSelector(state => state.result);
  const history = useSelector(state => state.history);

  const opCounts = useSelector(state => {

    // use the state.history to compute the counts...

  });

  // const onAdd = value => dispatch(createAddAction(value));

  const boundActions = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
    onMultiply: createMultiplyAction,
    onDivide: createDivideAction,
    onClear: createClearAction,
    onDeleteHistoryEntry: createDeleteHistoryEntryAction,
  }, useDispatch());

  return <CalcTool result={result} history={history} {...boundActions} />;

};

ReactDOM.render(
  <Provider store={calcStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);


