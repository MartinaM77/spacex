import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  iconButton: {
    padding: '0',
  },
}));

export default function GoBack() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div title="Go back" className='go-back'>
      <IconButton
        className={classes.iconButton}
        aria-label='Go back'
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon fontSize='large' color='primary'/>
      </IconButton>
    </div>
  );
}
