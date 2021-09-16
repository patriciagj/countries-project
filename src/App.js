import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/header/header.component';
import { CountryList } from './components/country-list/country-list.component';
import { Country } from './components/country/country.component';
import { SideBar } from './components/sidebar/sidebar.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  render() {
    return (
      <Switch>
        <React.Fragment>
          <div className='app'>
            <Header />
            <SideBar />
            <Route path='/' exact>
              <CountryList />
            </Route>
            <Route path='/:countryCode'>
              <Country />
            </Route>
          </div>
        </React.Fragment>
      </Switch>
    );
  }
}

export default App;
