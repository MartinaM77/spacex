import React from 'react';
import Moment from 'react-moment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import StarsImg from './stars.png';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: '0px 0px 2px 2px rgba(70, 77, 90, 0.7)',
  },
  media: {
    height: 0,
    paddingTop: '25%',
    backgroundColor: '#12161e',
  },
  button: {
    justifyContent: 'center',
    paddingBottom: '32px',
  }
}));

export default function DetailBox(props) {
  const classes = useStyles();
  const {
    mission_name,
    details,
    launch_date_local,
    launch_site,
    links,
    rocket,
    ships
  } = props;

  const seeMoreLink =
    links ? links.article_link || links.video_link || null
    : null;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={
          links
          && links.flickr_images
          && links.flickr_images[0] ? links.flickr_images[0]
          : StarsImg
        }
        title={mission_name}
      />
      <CardHeader
        title={mission_name}
        subheader={
          <div>
            {launch_date_local &&
              <Moment format='DD/MM/YYYY'>
                {launch_date_local}
              </Moment>
            }
            {launch_site &&
              <span>, {launch_site.site_name_long}</span>
            }
          </div>
        }
      />
      <CardContent>
        {details &&
          <p>{details}</p>
        }
        {rocket &&
          <p>Rocket:
          {rocket.rocket.wikipedia ?
            <a href={rocket.rocket.wikipedia}> {rocket.rocket_name}</a>
            : rocket.rocket_name
          }
          </p>
        }
        {ships && ships.length > 0 &&
          <p> Ships:
            {ships.map((ship, index) => {
              return (
                <span key={ship+index}>{index > 0 ? ', ' : ' '}
                {ship.url ?
                  <a href={ship.url}>{ship.name}</a>
                  : ship.name
                }
                </span>
              )
            })}
          </p>
        }
      </CardContent>
      {seeMoreLink &&
        <CardActions className={classes.button}>
          <a href={seeMoreLink} target="_blank" rel="noopener noreferrer">
            <Button variant="contained">See more</Button>
          </a>
        </CardActions>
      }
    </Card>
  );
}
