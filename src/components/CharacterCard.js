import React from 'react';
import styled from 'styled-components';

export default function CharacterCard(props) {
	const CharCard = styled.div`
		font-family: 'Baloo 2', cursive;
	`;
	return (
		<CharCard>
			<img src={props.image} alt={props.name} />
			<div className="char-info">
				<h3 className={props.id}>{props.name}</h3>
				<h4 className="species">Species: {props.species}</h4>
				<p className="homeworld">
					<a href={props.worldUrl}>{props.world}</a>
				</p>
			</div>
		</CharCard>
	);
}
