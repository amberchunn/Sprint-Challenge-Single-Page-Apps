import React from 'react';
// import CharacterList from './CharacterList';

export default function CharacterCard(props) {
	console.log(props);
	return (
		<li key={props.id}>
			{props.image}
			{props.name}, {props.species} from <a href={props.worldUrl}>{props.world}</a>
		</li>
	);
}
