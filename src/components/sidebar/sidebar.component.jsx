import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Search } from '../search/search.component';

import './sidebar.component.styles.css';

export const SideBar = () => {
  const favourites = useSelector(state => state.favourites);

  const [filteredFavourite, setFavourite] = useState();

  const filterFavourite = event => {
    console.log(event.target.value);
    setFavourite(event.target.value);
  };

  return (
    <div className='sidebar'>
      <Search onChange={filterFavourite} />
      {favourites
        .filter(country =>
          country === filteredFavourite ? filteredFavourite : !filteredFavourite
        )
        .map((country, index) => {
          return (
            <div className='country' key={index}>
              {country}
            </div>
          );
        })}
    </div>
  );
};
