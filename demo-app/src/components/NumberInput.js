import React from 'react';
import PropTypes from 'prop-types';

import { nanToValue } from '../utils';

export const NumberInput = (props) => {

  return (
    <input type="number" id={props.name + '-input'} name={props.name}
      value={nanToValue(props.value)} onChange={props.onChange} />
  );

};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};