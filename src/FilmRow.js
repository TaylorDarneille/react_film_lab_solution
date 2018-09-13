import React from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

const FilmRow = (props) => {
  	const filmYear = new Date(props.film.release_date);
    return (
    	<div className="film-row" onClick={() => {props.handleDetailsClick(props.film)}}>
  			<FilmPoster film={props.film}/>
			<div className="film-summary">
    			<h1>{props.film.title}</h1>
    			<p>{filmYear.getFullYear()}</p>
    			{/*<p>{this.props.film.release_date.split('-')[0]}</p>*/}
  			</div>
  			<Fave isFave={props.isFave} onFaveToggle={() => {props.onFaveToggle(props.film)} }/>
		</div>
    );
}

export default FilmRow;

