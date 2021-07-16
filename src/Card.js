import React from 'react';
import Moment from 'react-moment';
import { useHistory } from "react-router-dom";

export default function Card(props) {
  const { id, mission_name, details, launch_date_local } = props;
  const history = useHistory();

  const handleClick = () => history.push({
    pathname: '/mission',
    search: '?id='+id,
  });

  return (
    <div className='card' onClick={() => handleClick()}>
      <h3>{mission_name}</h3>
      <p>{details}</p>
      <p className='launchDate'>
        <Moment format='DD/MM/YYYY'>{launch_date_local}</Moment>
      </p>
    </div>
  );
}
