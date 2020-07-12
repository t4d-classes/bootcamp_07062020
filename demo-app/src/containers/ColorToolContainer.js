import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createAddColorAction, createDeleteColorAction,
} from '../actions/colorToolActions';

import { ColorTool } from '../components/ColorTool';

export const ColorToolContainer = () => {

  const colors = useSelector(state => state);

  const dispatchProps = bindActionCreators({
    onAddColor: createAddColorAction,
    onDeleteColor: createDeleteColorAction,
  }, useDispatch());


  return <ColorTool {...dispatchProps} colors={colors} />;
};