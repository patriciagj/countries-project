import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import useStyles from '../country/country.component.styles';

const url = `https://restcountries.eu/rest/v2/alpha/`;

export const Country = () => {
  const classes = useStyles();
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
    <div className={classes.content}>
      <Typography variant='h4'>{country.name}</Typography>
      <Typography variant='h6'>Capital: {country.capital}</Typography>
      <Typography variant='h6'>Population: {country.population}</Typography>
      <Typography variant='h6'>Region: {country.region}</Typography>
    </div>
  );
};
