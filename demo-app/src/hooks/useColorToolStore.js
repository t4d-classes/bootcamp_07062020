import { useList } from './useList';

export const useColorToolStore = (initialColors) => {

  const [ colors, appendColor, , removeColor ] = useList(initialColors.concat());

  return {
    colors, addColor: appendColor, deleteColor: removeColor,
  };

};