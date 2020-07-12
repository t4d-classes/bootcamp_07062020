export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';
export const CLEAR_ACTION = 'CLEAR';
export const DELETE_HISTORY_ENTRY_ACTION = 'DELETE_HISTORY_ENTRY';

export const createAddAction = value => ({ type: ADD_ACTION, payload: { value } });
export const createSubtractAction = value => ({ type: SUBTRACT_ACTION, payload: { value } });
export const createMultiplyAction = value => ({ type: MULTIPLY_ACTION, payload: { value } });
export const createDivideAction = value => ({ type: DIVIDE_ACTION, payload: { value } });
export const createClearAction = () => ({ type: CLEAR_ACTION });
export const createDeleteHistoryEntryAction = historyEntryId =>
  ({
    type: DELETE_HISTORY_ENTRY_ACTION,
    payload: { historyEntryId },
  });