import React from 'react';

export default function CharacterList(props) {
	// TODO: Add useState to track data from useEffect

	// console.log(props);

	return (
		<section className="character-list">
			<h2>Characters</h2>
			{props.data.map(item => (
				<div key={item.id} className="character-name">
					{item.name}
					<span className="char-from"> from </span>
					<a href="{url}">{item.origin.name}</a>
				</div>
			))}
		</section>
	);
}

// Why can't you setCharacter outside of axios call?
