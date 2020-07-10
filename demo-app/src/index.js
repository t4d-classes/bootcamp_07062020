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
  history: historyReducer,
});

const calcStore = createStore(calcReducer);


const CalcTool = ({
  result, history, opCounts,
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
      <table>
        <caption>Op Counts</caption>
        <thead>
          <tr>
            <th>Add</th>
            <th>Sub</th>
            <th>Mul</th>
            <th>Div</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{opCounts.add}</td>
            <td>{opCounts.subtract}</td>
            <td>{opCounts.multiply}</td>
            <td>{opCounts.divide}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );

};

const CalcToolContainer = () => {

  const computedProps = useSelector(state => {

    let result = 0;
    const opCounts = {
      add: 0, subtract: 0, multiply: 0, divide: 0,
    };

    state.history.forEach(historyEntry => {

      switch (historyEntry.opName) {
        case 'ADD':
          result += historyEntry.opValue;
          opCounts.add++;
          break;
        case 'SUBTRACT':
          result -= historyEntry.opValue;
          opCounts.subtract++;
          break;
        case 'MULTIPLY':
          result *= historyEntry.opValue;
          opCounts.multiply++;
          break;
        case 'DIVIDE':
          result /= historyEntry.opValue;
          opCounts.divide++;
          break;
        default:
          break;
      }

    });
    return { result, opCounts };
  });
  
  const history = useSelector(state => state.history);

  const boundActions = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
    onMultiply: createMultiplyAction,
    onDivide: createDivideAction,
    onClear: createClearAction,
    onDeleteHistoryEntry: createDeleteHistoryEntryAction,
  }, useDispatch());

  return <CalcTool {...computedProps} history={history} {...boundActions} />;

};

ReactDOM.render(
  <Provider store={calcStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);


