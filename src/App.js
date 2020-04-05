import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header.js';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList.js';
import WelcomePage from './components/WelcomePage.js';

export default function App(props) {
	const [character, setCharacter] = useState([]);
	const [query, setQuery] = useState('');

	useEffect(() => {
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

	const handleChange = event => {
		return setQuery(event.target.value);
	};

	const filtered = character.filter(char => {
		return char.name.toLowerCase().includes(query.toLowerCase());
	});
	return (
		<main data-testid="app">
			<Header />
			<Route exact path="/" component={WelcomePage} />
			<Route path="/CharacterList">
				<SearchForm data={character} handleChange={handleChange} />
				<CharacterList data={character} filtered={filtered} />
			</Route>
		</main>
	);
}
