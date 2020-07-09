import { useState } from 'react';

import { valueToNaN } from '../utils';


export const useForm = (initialForm) => {

  const [ form, setForm ] = useState(initialForm);

  const change = (e) => {
    setForm({
      ...form,
      [ e.target.name ]: e.target.type === 'number'
        ? valueToNaN(e.target.value)
        : e.target.value,
    });
  };  

  const resetForm = () => setForm(initialForm);

  return [ form, change, resetForm ];  

};