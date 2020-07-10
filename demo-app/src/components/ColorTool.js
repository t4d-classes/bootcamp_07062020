import React from 'react';

import { useColorToolContext } from '../context/colorToolContext';
import { ToolHeader } from './ToolHeader';
import { ItemList } from './ItemList';
import { ColorForm } from './ColorForm';

import './ColorTool.css';

export const ColorTool = () => {

  const { colors, addColor, deleteColor } = useColorToolContext();

  return (
    <div className="color-tool">
      <ToolHeader headerText={ 'Color Tool' } />
      <ItemList items={colors}
        contentFn={color => color.name + ' ' + color.hexcode}
        actionButtonText="X" onAction={deleteColor} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </div>
  );

};
