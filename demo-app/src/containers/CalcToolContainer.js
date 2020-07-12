import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { computedSelectors } from '../selectors/calcToolSelectors';
import {
  createAddAction, createSubtractAction, createMultiplyAction,
  createDivideAction, createClearAction, createDeleteHistoryEntryAction,
} from '../actions/calcToolActions';
import { CalcTool } from '../components/CalcTool';

export const CalcToolContainer = () => {

  const computedProps = useSelector(computedSelectors);
  
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