import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { useQuery, gql } from "@apollo/client";
import { useHistory, useLocation } from 'react-router-dom';
import DetailBox from './DetailBox.js';

const MISSION_QUERY = gql`
query getLaunch($id: ID!){
  launch(id: $id) {
    mission_name
    details
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      flickr_images
      video_link
    }
    rocket {
      rocket_name
      rocket {
        wikipedia
      }
    }
    ships {
      name
      url
    }
  }
}
`;

export default function Mission() {
  const history = useHistory();
  const location = useLocation();
  const search = location.search;
  const match = search.match(/id=(.*)/);
  const id = match?.[1];
  if (!id) {
    history.push({
      pathname: '/'
    });
  }

  const { loading, error, data } = useQuery(MISSION_QUERY, {
    variables: { id },
  });

  if (error) return <div>{error.message}</div>;
  const launch = data ? data.launch : null;

  return (
    <Grid container spacing={0} justifyContent='center' className='mission'>
      {loading || !launch ?
        <Grid item xs={8} className='loading-launches'>
          <CircularProgress />
        </Grid>
        :
        <Grid
          item
          xs={8}
          key={launch.id}
          className={'mission-box'}
        >
          <DetailBox {...launch} />
        </Grid>
      }
    </Grid>
  );
}
