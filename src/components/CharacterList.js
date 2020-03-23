import React from 'react';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
	// TODO: Add useState to track data from useEffect

	const list = props.filtered.map(item => {
		return (
			<CharacterCard
				key={item.id}
				name={item.name}
				species={item.species}
				image={item.image}
				worldUrl={item.origin.url}
				world={item.origin.name}
			/>
		);
	});
	return (
		<section className="character-list">
			<h2>Characters</h2>
			<ul>{list}</ul>
		</section>
	);
}

// Why can't you setCharacter outside of axios call?
