import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from '../header/header.component.styles';

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            World Countries Info
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
