import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';

import CharacterList from './components/CharacterList.js';
import WelcomePage from './components/WelcomePage.js';

import styled from 'styled-components';

export default function App(props) {
	return (
		<main data-testid="app">
			<Header />
			<Route exact path="/components/WelcomePage">
				<WelcomePage />
			</Route>
			<Route path="/components/CharacterList">
				<CharacterList />
			</Route>
			{/* {console.log(character)} */}
		</main>
	);
}
