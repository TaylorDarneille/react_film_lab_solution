import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

class FilmRow extends Component {

	handleDetailsClick = (film) => {
		console.log("Fetching details for", film.title);
	}

  render() {

  	const filmYear = new Date(this.props.film.release_date);

    return (
    	<div className="film-row" onClick={() => {this.handleDetailsClick(this.props.film)}}>
  			<FilmPoster film={this.props.film}/>
			<div className="film-summary">
    			<h1>{this.props.film.title}</h1>
    			<p>{filmYear.getFullYear()}</p>
    			{/*<p>{this.props.film.release_date.split('-')[0]}</p>*/}
  			</div>
  			<Fave />
		</div>
    );
  }
}

export default FilmRow;

