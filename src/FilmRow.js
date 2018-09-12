import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

class FilmRow extends Component {

  render() {

  	const filmYear = new Date(this.props.film.release_date);

    return (
    	<div className="film-row" onClick={() => {this.props.handleDetailsClick(this.props.film)}}>
  			<FilmPoster film={this.props.film}/>
			<div className="film-summary">
    			<h1>{this.props.film.title}</h1>
    			<p>{filmYear.getFullYear()}</p>
    			{/*<p>{this.props.film.release_date.split('-')[0]}</p>*/}
  			</div>
  			<Fave isFave={this.props.isFave} onFaveToggle={() => {this.props.onFaveToggle(this.props.film)} }/>
		</div>
    );
  }
}

export default FilmRow;

