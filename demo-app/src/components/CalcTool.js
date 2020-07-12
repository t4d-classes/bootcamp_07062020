import React, { useState } from 'react';

export const CalcTool = ({
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