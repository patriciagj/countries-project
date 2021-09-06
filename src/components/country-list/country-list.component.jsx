import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SelectRegion } from '../select-region/select-region.component';

import './country-list.component.styles.css';

const url = `https://restcountries.eu/rest/v2/all`;

export const CountryList = () => {
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

  return (
    <div>
      <SelectRegion onChange={fetchRegionData} />
      <div className='grid-container'>
        {countries
          .filter(country =>
            country.region === region ? region : region === 'All'
          )
          .map(country => {
            const {
              flag,
              name,
              capital,
              population,
              region,
              numericCode,
              alpha2Code,
            } = country;
            return (
              <div className='country' key={numericCode}>
                <img src={flag} alt={name} />
                <Link to={`/${alpha2Code}`}>
                  <h2>{name}</h2>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
