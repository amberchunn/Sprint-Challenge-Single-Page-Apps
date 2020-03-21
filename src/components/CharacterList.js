import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CharacterList(props) {
	// TODO: Add useState to track data from useEffect

	const [character, setCharacter] = useState([]);

	useEffect(() => {
		// const id = props.match.params.id;
		axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`
			)
			.then(response => {
				setCharacter(response.data.results);
			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	console.log(character);
	return (
		<section className="character-list">
			<h2>Characters</h2>
			{/* {console.log(character)} */}
			{character.map(item => (
				<div key={item.id} className="character-name">
					{item.name} <span className="char-from">from</span>{' '}
					<a href="`${url}`">{item.origin.name}</a>
				</div>
			))}
		</section>
	);
}

// Why can't you setCharacter outside of axios call?
