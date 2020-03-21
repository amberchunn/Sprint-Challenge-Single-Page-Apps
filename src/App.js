import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList.js';
import WelcomePage from './components/WelcomePage.js';

import styled from 'styled-components';

export default function App(props) {
	return (
		<main data-testid="app">
			<nav id="navigation">
				<Link to="/">Welcome</Link>
				<Link to="/CharacterList">Characters</Link>
			</nav>
			<Header />
			<Route path="/" component={WelcomePage} />
			<Route path="/CharacterList" component={CharacterList} />
		</main>
	);
}
