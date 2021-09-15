import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import useStyles from './select-region.component.styles';

export const SelectRegion = props => {
  const classes = useStyles();
  const [select, setSelect] = React.useState('');

  const handleChange = event => {
    setSelect(event.target.value);
    props.onChange(event);
  };

  return (
    <div>
      <FormControl
        variant='outlined'
        size='small'
        className={classes.formControl}
      >
        <InputLabel id='select-outlined-label'>Region</InputLabel>
        <Select
          labelId='select-outlined-label'
          id='select-outlined'
          value={select}
          label='Select'
          onChange={event => handleChange(event)}
        >
          <MenuItem value={'Select Region'}>Select Region</MenuItem>
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'Americas'}>Americas</MenuItem>
          <MenuItem value={'Asia'}>Asia</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
          <MenuItem value={'Oceania'}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
