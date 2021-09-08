import React from 'react';

import './sidebar.component.styles.css';

import { useSelector, useDispatch } from 'react-redux';

export const SideBar = () => {
  const favourites = useSelector(state => state.favourites);
  return (
    <div className='sidebar'>
      {favourites.map((country, index) => {
        return (
          <div className='country' key={index}>
            {country}
          </div>
        );
      })}
    </div>
  );
};
