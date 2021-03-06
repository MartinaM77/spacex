import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { useQuery, gql } from "@apollo/client";
import Alert from './Alert.js';
import Card from './Card.js';
import ShuttleIcon from './shuttle.svg';

export const LAUNCHES_QUERY = gql`
{
  launchesPast(limit: 10) {
    id
    mission_name
    details
    launch_date_local
  }
}
`;

export default function Dashboard() {
  const { data, loading, error } = useQuery(LAUNCHES_QUERY);

  if (error) return <Alert type={'Error'} description={error.message}/>;

  return (
    <div className='dashboard-wrapper'>
    <Grid container spacing={0} justifyContent='center' className='dashboard'>
      <Grid item xs={8}>
        <h1 className='launch-title'>Last Launches</h1>
        <div className='launch-icon'>
          <img
            src={ShuttleIcon}
            alt='Shuttle Icon'
            width='40px'
            height='40px'
          />
        </div>
      </Grid>
      {loading ?
        <Grid item xs={8} className='loading-launches'>
          <CircularProgress />
        </Grid>
        :
        data.launchesPast.map((launch) => (
          <Grid
            item
            xs={8}
            key={launch.id}
          >
            <Card {...launch} />
          </Grid>
        ))
      }
    </Grid>
    </div>
  );
}
