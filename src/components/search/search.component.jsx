import React from 'react';

import './search.component.styles.css';

export const Search = props => {
  return (
    <form>
      <input
        type='search'
        className='search'
        placeholder='Search country'
        onChange={event => props.onChange(event)}
      ></input>
    </form>
  );
};
