import React, { Component } from 'react';
import { Country } from './components/country/country.component';

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
      <div className='app'>
        <header className='app-header'>World Countries Info</header>
        <Country />
      </div>
    );
  }
}

export default App;
