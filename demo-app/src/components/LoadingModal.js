import React from 'react';
import { createPortal } from 'react-dom';

const modalDiv = document.querySelector('#modal');

export const LoadingModal = ({ isLoading }) => {

  return <>
    {isLoading && createPortal(
      <div>
        <p>Loading</p>
      </div>, modalDiv)}</>

};