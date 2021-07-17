import React from 'react';
import GoBack from './GoBack.js';

export default function Alert(props) {
  const {type, description, back} = {...props};

  return (
    <div className='alert'>
      {back && <GoBack />}
      <div className='alert-box'>
        <h4>{type}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
