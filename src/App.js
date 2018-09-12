import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing TMDB={TMDB}/>
        <FilmDetails TMDB={TMDB}/>
      </div>
    );
  }
}

export default App;
