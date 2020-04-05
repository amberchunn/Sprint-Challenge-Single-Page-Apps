import React from 'react';
import styled from 'styled-components';

export default function CharacterCard(props) {
	const CharCard = styled.div`
		font-family: 'Baloo 2', cursive;
		max-width: 25%;
		border: 5px solid #e15a97;
		border-radius: 20px;
		padding: 20px;
		margin: 10px auto;
		background: #f6f6f6;
		a {
			text-decoration: none;
			color: #e15a97;
			&:hover {
				color: #82708a;
			}
		}

		h3 {
			font-size: 2.5rem;
			color: #3a606e;
			text-align: center;
			font-weight: 700;
			margin-bottom: 15px;
		}
		img {
			border-radius: 5px;
			width: 100%;
			text-align: center;
			box-shadow: 0 19px 28px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
		}
	`;
	const CharInfo = styled.div`
		width: 100%;
		margin-top: 25px;
		text-align: center;
		font-size: 2rem;
	`;
	return (
		<CharCard>
			<h3 className={props.id}>{props.name}</h3>
			<img src={props.image} alt={props.name} />
			<CharInfo>
				<h4 className="species">Species: {props.species}</h4>
				<p className="homeworld">
					<a href={props.worldUrl}>{props.world}</a>
				</p>
			</CharInfo>
		</CharCard>
	);
}
