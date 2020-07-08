import React from 'react';

import { NumberInput } from './NumberInput';

export const StringFormControl = (props) => {

  return (
    <div>
      <label htmlFor={props.name + '-input'}>{props.caption}</label>
      <input type="text" id="model-input" name={props.name}
        value={props.value} onChange={props.onChange} />
    </div>
  );

}

export const NumberFormControl = (props) => {

  return (
    <div>
      <label htmlFor={props.name + '-input'}>{props.caption}</label>
      <NumberInput name={props.name}
        value={props.value} onChange={props.onChange} />
    </div>
  );

}