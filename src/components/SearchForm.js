import React from 'react';

export default function SearchForm(props) {
	return (
		<section>
			<form>
				<label htmlFor="name">~ Find a Character~ </label>
				<input name="name" id="name" onChange={props.handleChange} />
			</form>
		</section>
	);
}
