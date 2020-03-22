import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header.js';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList.js';
import WelcomePage from './components/WelcomePage.js';

import styled from 'styled-components';

export default function App(props) {
	const [character, setCharacter] = useState([]);
	const [query, setQuery] = useState('');

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

	// console.log(character);
	return (
		<main data-testid="app">
			<nav id="navigation">
				<Link to="/">Welcome</Link>
				<Link to="/CharacterList">Characters</Link>
			</nav>
			<Header />
			<SearchForm data={character} query={query} />
			<Route path="/" component={WelcomePage} />
			<Route path="/CharacterList">
				<CharacterList data={character} query={query} />
			</Route>
		</main>
	);
}
