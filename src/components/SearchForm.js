import React from 'react';

export default function SearchForm(props) {
	return (
		<section className="search-form">
			<form>
				<legend>Find a Name</legend>
				<input name="name" id="name" onChange={props.handleChange} />
				<label htmlFor="name">Full Name</label>
			</form>
		</section>
	);
}
