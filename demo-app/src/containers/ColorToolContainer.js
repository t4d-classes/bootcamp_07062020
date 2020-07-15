import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  refreshColors, addColor, deleteColor,
} from '../actions/colorToolActions';

import { ColorTool } from '../components/ColorTool';

export const ColorToolContainer = () => {

  const stateProps = useSelector(state => state);

  const dispatch = useDispatch();

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshColors: refreshColors,
    onAddColor: addColor,
    onDeleteColor: deleteColor,
  }, dispatch), [dispatch]);

  useEffect(() => {
    dispatchProps.onRefreshColors();
  }, [dispatchProps]);


  return <ColorTool {...dispatchProps} {...stateProps} />;
};