import React from 'react';
import Moment from 'react-moment';

export default function Card(props) {
  const { mission_name, details, launch_date_local } = props;

  return (
    <div className='card'>
      <h3>{mission_name}</h3>
      <p>{details}</p>
      <p className='launchDate'>
        <Moment format='DD/MM/YYYY'>{launch_date_local}</Moment>
      </p>
    </div>
  );
}
