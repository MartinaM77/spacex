import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Card from './Card.js';
import ShuttleIcon from './shuttle.svg';

const endPoint = 'https://api.spacex.land/graphql/';
const queryClient = new QueryClient();
const query = `
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
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <WrappedDashboard/>
    </QueryClientProvider>
  );
}

function WrappedDashboard() {
  const { data, isLoading, error } = useQuery('launches', () => {
    return axios({
      url: endPoint,
      method: 'POST',
      data: {
        query: query
      }
    }).then(response => response.data.data);
  });

  if (error) return <div>{error.message}</div>;

  return (
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
      {isLoading ?
        <Grid item xs={8} className='loading-launches'>
          <div>Loading...</div>
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
  );
}
