import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header(props) {
	const Header = styled.h1`
		font-size: 4rem;
		color: #563440;
		// font-family: 'Baloo 2', cursive;
		font-family: 'Exo 2', sans-serif;
		font-weight: 700;
		width: 100%;
		margin-bottom: 25px;
		text-align: center;
	`;
	const Nav = styled.nav`
		border-top: 1px solid #3a606e;
		border-bottom: 1px solid #3a606e;
		font-size: 2rem;
		font-family: 'Exo 2', sans-serif;
		text-transform: uppercase;
		color: #fff;
		display: flex;
		justify-content: space-evenly;
		width: 100%;
		a,
		a:visited {
			color: #82708a;
			text-decoration: none;
			font-weight: 700;
			padding: 20px;
		}
		a:hover,
		a:focus {
			background-color: #d3d57c;
			border: 0;
			color: #fff;
		}
	`;
	return (
		<>
			<Header>Rick &amp; Morty Fan Page</Header>

			<Nav>
				<NavLink to="/">Welcome</NavLink>
				<NavLink to="/CharacterList">Characters</NavLink>
			</Nav>
		</>
	);
}
