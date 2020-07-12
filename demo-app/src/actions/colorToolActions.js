
export const ADD_COLOR_ACTION = 'ADD_COLOR';
export const DELETE_COLOR_ACTION = 'DELETE_COLOR';

export const createAddColorAction = color => ({ type: ADD_COLOR_ACTION, color });
export const createDeleteColorAction = colorId => ({ type: DELETE_COLOR_ACTION, colorId });