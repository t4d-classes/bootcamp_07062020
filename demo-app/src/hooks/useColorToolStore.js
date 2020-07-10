import { useState } from 'react';

import { useList } from './useList';

export const useColorToolStore = (initialColors) => {

  const [ colors, appendColor, , removeColor ] = useList(initialColors.concat());
  const [ editColorId, setEditColorId ] = useState(-1);

  const addColor = (color) => {
    appendColor(color);
    setEditColorId(-1);
  };

  const deleteColor = (colorId) => {
    removeColor(colorId);
    setEditColorId(-1);
  };

  return {
    colors, editColorId,
    addColor, deleteColor,
  };

};