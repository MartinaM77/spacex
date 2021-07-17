import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery, gql } from "@apollo/client";
import { useHistory, useLocation } from 'react-router-dom';
import DetailBox from './DetailBox.js';

const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: '50px',
  },
  iconButton: {
    padding: '0',
  },
}));

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
  const classes = useStyles();
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
      <Grid item xs={8} className={classes.root}>
        <div title="Go back">
          <IconButton
            className={classes.iconButton}
            aria-label='Go back'
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon fontSize='large' color='primary'/>
          </IconButton>
        </div>
      </Grid>
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
