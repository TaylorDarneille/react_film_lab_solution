import React from 'react';

const FilmPoster = (props) => {
	const url = `https://image.tmdb.org/t/p/w780${props.film.poster_path}`;
	return(<img src={url} alt="poster image"/>)
}

export default FilmPoster;