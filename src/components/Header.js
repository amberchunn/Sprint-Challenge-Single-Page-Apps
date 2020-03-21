import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header className="ui centered">
			<h1 className="ui center">Rick &amp; Morty Fan Page</h1>
			<nav id="id">
				<NavLink to="/">Welcome</NavLink>

				<NavLink to="./CharacterList">Characters</NavLink>
			</nav>
		</header>
	);
}
