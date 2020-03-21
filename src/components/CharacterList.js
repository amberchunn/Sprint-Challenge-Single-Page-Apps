import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CharacterList(props) {
	// TODO: Add useState to track data from useEffect

	const [character, setcharacter] = useState([]);

	useEffect(() => {
		// const id = props.match.params.id;
		axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`
			)
			.then(response => {
				setcharacter(response.data);
			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	return (
		<section className="character-list">
			{console.log(character)}
			<h2>TODO: `array.map()` over your state here!</h2>
			{character.map(toon => {
				return toon.results;
			})}
		</section>
	);
}
