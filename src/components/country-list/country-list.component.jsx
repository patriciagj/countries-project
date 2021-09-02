import React, { useState, useEffect } from 'react';

import { SelectRegion } from '../select-region/select-region.component';

import './country-list.component.styles.css';

const url = `https://restcountries.eu/rest/v2/all`;
const urlRegion = `https://restcountries.eu/rest/v2/region/`;

export const CountryList = () => {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  const fetchRegionData = async region => {
    console.log(region.target.value);
    const response = await fetch(urlRegion + region.target.value);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <SelectRegion onChange={fetchRegionData} />
      <div className='grid-container'>
        {countries.map(country => {
          const { flag, name, capital, population, region, numericCode } =
            country;
          return (
            <div className='country' key={numericCode}>
              <img src={flag} alt={name} />
              <h2>{name}</h2>
              <h4>Capital: {capital}</h4>
              <h4>Population: {population}</h4>
              <h4>Region: {region}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
