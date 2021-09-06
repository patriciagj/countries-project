import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import './country.component.styles.css';

const url = `https://restcountries.eu/rest/v2/alpha/`;

export const Country = () => {
  const { countryCode } = useParams();

  const [country, setCountry] = useState([]);
  const fetchCountry = async () => {
    const response = await fetch(url + countryCode);
    const country = await response.json();
    setCountry(country);
    console.log(country);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <div>
      <section className='country__details'>
        <h3>{country.name}</h3>
        <h4>Capital: {country.capital}</h4>
        <h4>Population: {country.population}</h4>
        <h4>Region: {country.region}</h4>
      </section>
    </div>
  );
};
