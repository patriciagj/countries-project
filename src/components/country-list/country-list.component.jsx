import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../redux/actions';

import { SelectRegion } from '../select-region/select-region.component';

import { Search } from '../search/search.component';

import './country-list.component.styles.css';

const url = `https://restcountries.eu/rest/v2/all`;

export const CountryList = () => {
  const favourites = useSelector(state => state.favourites);
  const dispatch = useDispatch();

  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState();

  const fetchData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    setRegion('All');
    console.log(countries);
  };

  const fetchRegionData = async event => {
    console.log(event.target.value);
    setRegion(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnChange = (event, index) => {
    event.target.checked
      ? dispatch(allActions.favouriteCountryActions.favourite(index))
      : dispatch(allActions.favouriteCountryActions.unfavourite(index));
  };

  return (
    <div>
      <Search />
      <SelectRegion onChange={fetchRegionData} />
      <div className='grid-container'>
        {countries
          .filter(country =>
            country.region === region ? region : region === 'All'
          )
          .map((country, index) => {
            const { flag, name, numericCode, alpha2Code } = country;
            return (
              <div className='country' key={numericCode}>
                <img src={flag} alt={name} />
                <Link to={`/${alpha2Code}`}>
                  <h2>{name}</h2>
                </Link>
                <input
                  type='checkbox'
                  id={`custom-checkbox-${index}`}
                  name={name}
                  value={name}
                  // checked={checkedState(index)}
                  onChange={event => handleOnChange(event, index)}
                ></input>
              </div>
            );
          })}
      </div>
    </div>
  );
};
