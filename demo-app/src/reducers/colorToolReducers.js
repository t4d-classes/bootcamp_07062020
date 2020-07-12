import { ADD_COLOR_ACTION, DELETE_COLOR_ACTION } from '../actions/colorToolActions';

const initialColorList = [
  { id: 1, name: 'red', hexcode: '#FF0000' },
  { id: 2, name: 'green', hexcode: '#00FF00' },
  { id: 3, name: 'blue', hexcode: '#0000FF' },
];

export const colorReducer = (colors = initialColorList, action) => {

  if (action.type === ADD_COLOR_ACTION) {
    return colors.concat({
      ...action.color,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    });
  }

  if (action.type === DELETE_COLOR_ACTION) {
    return colors.filter(c => c.id !== action.colorId);
  }

  return colors;

};