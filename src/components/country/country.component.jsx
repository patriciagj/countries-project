import React, { useState, useEffect } from 'react';

import './country.component.styles.css';

const url = `https://restcountries.eu/rest/v2/all`;

export const Country = () => {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
  );
};
