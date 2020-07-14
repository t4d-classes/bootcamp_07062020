import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createAddCarAction, createSaveCarAction,
  createDeleteCarAction, createEditCarAction,
  createCancelCarAction, refreshCars,
} from '../actions/carToolActions';

import { CarTool } from '../components/CarTool';
import { LoadingModal } from '../components/LoadingModal';

export const CarToolContainer = () => {

  const stateProps = useSelector(state => state);

  const dispatch = useDispatch();

  // const onAddCar = car => dispatch(createAddCarAction(car));

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshCars: refreshCars,
    onAddCar: createAddCarAction,
    onSaveCar: createSaveCarAction,
    onDeleteCar: createDeleteCarAction,
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