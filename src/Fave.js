import React, { Component } from 'react';

class Fave extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFave: false
		}
	}

	handleClick = (e) => {
		e.stopPropagation();
		this.setState({isFave: this.state.isFave ? false : true});
		console.log("handling Fave click!");
	}

	render() {
		const toQueue = this.state.isFave ? "remove_from_queue" : "add_to_queue";
		return(
			<div className={`film-row-fave ${toQueue}`} onClick={this.handleClick}>
	  			<p className="material-icons">add_to_queue</p>
			</div>
		)
	}
}

export default Fave;