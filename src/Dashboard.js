import React from 'react';
import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

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
    <div>
      <h1>Last Launches</h1>
      {isLoading ?
        <div>Loading...</div>
        :
        data.launchesPast.map((launch) => (
          <div key={launch.id}>{launch.mission_name}</div>
        ))
      }
    </div>
  );
}
