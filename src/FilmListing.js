import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {

	handlFilterClick = (filter) => {
		console.log("Setting filter to:", filter);
	}

	render() {

	 const allFilms = this.props.TMDB.films.map(film => <FilmRow film={film} />);

	  return (
	     <div className="film-list">
	        <h1 className="section-title">FILMS</h1>
	        	<div className="film-list-filters">
        			<div className="film-list-filter" onClick={() => this.handlFilterClick('all')}>
            			ALL
            			<span className="section-count">{this.props.TMDB.films.length}</span>
        			</div>
        			<div className="film-list-filter" onClick={() => this.handlFilterClick('faves')}>
            			FAVES
           			<span className="section-count">0</span>
        			</div>
   				</div>
	        {/*Step 4: <h1 className="film-title">{this.props.TMDB.films[0].title}</h1>*/}
	        {allFilms}
	      </div>
	   );
	}
}

export default FilmListing;

