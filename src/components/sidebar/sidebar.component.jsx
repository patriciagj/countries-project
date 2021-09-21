import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../redux/actions';

import { Search } from '../search/search.component';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import IconButton from '@mui/material/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

import useStyles from './sidebar.component.styles';

export const SideBar = () => {
  const classes = useStyles();
  const favourites = useSelector(state => state.favourites);
  const dispatch = useDispatch();

  const [filteredFavourite, setFavourite] = useState();

  const filterFavourite = event => {
    console.log(event.target.value);
    setFavourite(event.target.value);
  };

  const handleRemove = country => {
    dispatch(allActions.favouriteCountryActions.unfavourite(country));
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <Search onChange={filterFavourite} />
          {favourites
            .filter(country =>
              country === filteredFavourite
                ? filteredFavourite
                : !filteredFavourite
            )
            .map((country, index) => {
              return (
                <div key={index}>
                  {country}
                  <IconButton
                    aria-label='upload picture'
                    component='span'
                    onClick={() => handleRemove(country)}
                  >
                    <ClearIcon fontSize='small' />
                  </IconButton>
                </div>
              );
            })}
        </List>
      </Drawer>
    </div>
  );
};
