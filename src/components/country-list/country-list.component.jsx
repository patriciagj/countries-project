import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SelectRegion } from '../select-region/select-region.component';

import { Search } from '../search/search.component';

import './country-list.component.styles.css';

const url = `https://restcountries.eu/rest/v2/all`;

export const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState();
  const [checkedState, setCheckedState] = useState(
    new Array(countries.length).fill(false)
  );

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

  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
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
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                ></input>
              </div>
            );
          })}
      </div>
    </div>
  );
};
