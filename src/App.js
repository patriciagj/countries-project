import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/header/header.component';
import { CountryList } from './components/country-list/country-list.component';
import { Country } from './components/country/country.component';
import { SideBar } from './components/sidebar/sidebar.component';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import './App.css';

const darkGrey = grey['900'];
const lightGrey = grey['600'];

const customTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: darkGrey,
    },
    secondary: {
      main: lightGrey,
    },
  },
  typography: {
    fontFamily: ['Arial'],
    fontWeight: 'bold',
    h1: { fontWeight: 'bold', fontSize: '25px', textTransform: 'uppercase' },
    h4: { fontWeight: 'bold', fontSize: '20px', textTransform: 'uppercase' },
    h6: {
      fontSize: '15px',
    },
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  render() {
    return (
      <ThemeProvider theme={customTheme}>
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
      </ThemeProvider>
    );
  }
}

export default App;
