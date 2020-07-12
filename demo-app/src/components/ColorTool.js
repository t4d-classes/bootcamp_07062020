import React from 'react';

import { ToolHeader } from './ToolHeader';
import { ItemList } from './ItemList';
import { ColorForm } from './ColorForm';

import './ColorTool.css';

export const ColorTool = ({
  colors,
  onAddColor: addColor,
  onDeleteColor: deleteColor,
}) => {

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
