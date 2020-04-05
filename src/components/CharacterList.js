import React from 'react';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

export default function CharacterList(props) {
	// TODO: Add useState to track data from useEffect
	const Characters = styled.section`
		margin-top: 25px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	`;
	const cardList = props.filtered.map(item => {
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
	return <Characters>{cardList}</Characters>;
}

// Why can't you setCharacter outside of axios call?
