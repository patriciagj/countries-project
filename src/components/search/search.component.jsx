import React from 'react';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from '../search/search.component.styles';

export const Search = props => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin} size='small'>
        <Input
          id='input-with-icon-adornment'
          type='search'
          className='search'
          placeholder='Search country'
          onChange={event => props.onChange(event)}
          startAdornment={
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          }
        ></Input>
      </FormControl>
    </div>
  );
};
