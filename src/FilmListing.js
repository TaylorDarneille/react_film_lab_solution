import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {

	constructor(props) {
		super()
		this.state = {
			filter: "all"
		}
	}

	handlFilterClick = (filter) => {
		this.setState({filter: filter});
	}

	render() {

	 const filmsToDisplay = this.state.filter==="all" ? this.props.films : this.props.faves

	 const allFilms = filmsToDisplay.map(film => {
	 	return (
		 		<FilmRow 
		 			film={film} 
		 			isFave={this.props.faves.includes(film)} 
		 			onFaveToggle={this.props.onFaveToggle} 
		 			handleDetailsClick={this.props.handleDetailsClick}
		 		/>
	 		)
	 });

	  return (
	     <div className="film-list">
	        <h1 className="section-title">FILMS</h1>
	        	<div className="film-list-filters">
        			<div className={`film-list-filter ${this.state.filter==="all" ? "is-active" : ""}`} onClick={() => this.handlFilterClick('all')}>
            			ALL
            			<span className="section-count">{this.props.films.length}</span>
        			</div>
        			<div className={`film-list-filter ${this.state.filter==="faves" ? "is-active" : ""}`} onClick={() => this.handlFilterClick('faves')}>
            			FAVES
           			<span className="section-count">{this.props.faves.length}</span>
        			</div>
   				</div>
	        {/*Step 4: <h1 className="film-title">{this.props.films[0].title}</h1>*/}
	        {allFilms}
	      </div>
	   );
	}
}

export default FilmListing;

