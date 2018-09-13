import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import TMDB from './TMDB';

class App extends Component {

  constructor(props) {
    super()
    this.state = {
      films: TMDB.films,
      // faves: [],
      current: {}
    }
  }

  handleDetailsClick = (film) => {
    console.log("Fetching details for", film.title);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    fetch(url).then(response => {
      response.json().then(data => {
        this.setState({current: data});
      })
    })
  }

  // handleFaveToggle = (film) => {
  //   const newFaves = this.state.faves.slice();
  //   const filmIndex = this.state.faves.indexOf(film);
  //   console.log("filmIndex", filmIndex);
  //   if(filmIndex<0) {
  //     console.log(`Adding ${film.title} to faves...`);
  //     newFaves.push(film);
  //   } else {
  //     newFaves.splice(filmIndex, 1);
  //     console.log(`Removing ${film.title} from faves...`);
  //   }
  //   this.setState({faves: newFaves});
  // }

  render() {
    return (
      <div className="film-library">
        <FilmListing 
          films={this.state.films} 
          // faves={this.state.faves} 
          // onFaveToggle={this.handleFaveToggle} 
          handleDetailsClick={this.handleDetailsClick}
        />
        <FilmDetails film={this.state.current}/>
      </div>
    );
  }
}

export default App;
