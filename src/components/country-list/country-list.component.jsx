import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../redux/actions';

import { SelectRegion } from '../select-region/select-region.component';

import { Search } from '../search/search.component';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import useStyles from '../country-list/country-list.component.styles';

const url = `https://restcountries.com/v2/all`;
const urlFilter = `https://restcountries.com/v2/name/`;

export const CountryList = () => {
  const classes = useStyles();
  const favourites = useSelector(state => state.favourites);
  const dispatch = useDispatch();

  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      setRegion('All');
      console.log(countries);
    } catch (error) {
      // if any error occurs then the error is handled here
      console.error('Error Occurred', error);
    }
  };

  const fetchRegionData = async event => {
    try {
      console.log(event.target.value);
      setRegion(event.target.value);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnChange = (event, index) => {
    event.target.checked
      ? dispatch(allActions.favouriteCountryActions.favourite(index))
      : dispatch(allActions.favouriteCountryActions.unfavourite(index));
  };

  const isFavourite = name => {
    return favourites.includes(name);
  };

  const filterCountry = async event => {
    const response = await fetch(urlFilter + event.target.value);
    const searchCountry = await response.json();
    setCountries(searchCountry);
    console.log(searchCountry);
  };

  return (
    <div className={classes.root}>
      <div className={classes.inputs}>
        <Search onChange={filterCountry} />
        <SelectRegion onChange={fetchRegionData} />
      </div>
      <Grid container spacing={4}>
        {countries
          .filter(country =>
            country.region === region ? region : region === 'All'
          )
          .map((country, index) => {
            const { flag, name, numericCode, alpha2Code } = country;
            return (
              <Grid key={numericCode} item xs={12} sm={6} md={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      height='140'
                      image={flag}
                      alt='flag'
                    />
                    <CardContent>
                      <Link
                        to={`/${alpha2Code}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <Typography gutterBottom variant='h6' component='div'>
                          {name}
                        </Typography>
                      </Link>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.action}>
                    <Checkbox
                      type='checkbox'
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={isFavourite(name)}
                      onChange={event => handleOnChange(event, name)}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};
