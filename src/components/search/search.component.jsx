import React from 'react';

import './search.component.styles.css';

export const Search = () => {
  return (
    <form>
      <input
        type='text'
        className='search'
        placeholder='Search country'
      ></input>
      <button type='submit' className='btn__submit'>
        Search
      </button>
    </form>
  );
};
