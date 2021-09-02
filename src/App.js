import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Country } from './components/country/country.component';
import { SelectRegion } from './components/select-region/select-region.component';

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
        <div className='app'>
          <header className='app-header'>World Countries Info</header>
          <SelectRegion />
          <Route path='/' exact>
            <Country />
          </Route>
        </div>
      </Switch>
    );
  }
}

export default App;
