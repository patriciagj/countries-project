import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { CountryList } from './components/country-list/country-list.component';

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
          <Route path='/' exact>
            <CountryList />
          </Route>
        </div>
      </Switch>
    );
  }
}

export default App;
