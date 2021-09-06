import React from 'react';

import './select-region.component.styles.css';

export const SelectRegion = props => {
  return (
    <section className='select'>
      <select
        name='select'
        id='select'
        className='select__country'
        onChange={event => props.onChange(event)}
      >
        <option value='Select Region'>Select Region</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </section>
  );
};
