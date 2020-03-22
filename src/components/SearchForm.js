import React, { useState } from 'react';

export default function SearchForm(props) {
	const handleChange = event => {
		// setQuery(event.target.value);
	};

	// console.log(props);

	const handleSubmit = event => {
		event.preventDefault();
	};
	return (
		<section className="search-form">
			<form>
				<legend>Find a Name</legend>
				<input name="name" id="name" onChange={handleChange} />
				<label htmlFor="name">Full Name</label>
				<button className="btn" onClick={handleSubmit}>
					Search
				</button>
			</form>
		</section>
	);
}

// const filtered = () => {
// 	return this.props.character.filter(
// 		char =>
// 			char.toLowerCase().indexOf(this.props.character.toLowerCase()) !== -1
// 	);
// };
