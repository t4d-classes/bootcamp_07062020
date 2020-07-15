import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  addCar, saveCar, deleteCar, createEditCarAction,
  createCancelCarAction, refreshCars,
} from '../actions/carToolActions';

import { CarTool } from '../components/CarTool';
import { LoadingModal } from '../components/LoadingModal';

export const CarToolContainer = () => {

  const stateProps = useSelector(state => state);

  const dispatch = useDispatch();

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshCars: refreshCars,
    onAddCar: addCar,
    onSaveCar: saveCar,
    onDeleteCar: deleteCar,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
  }, dispatch), [ dispatch ]);

  useEffect(() => {

    dispatchProps.onRefreshCars();

  }, [ dispatchProps ]);


  return <>
    <CarTool {...dispatchProps} {...stateProps} />
    <LoadingModal isLoading={stateProps.isLoading} />
  </>;
};