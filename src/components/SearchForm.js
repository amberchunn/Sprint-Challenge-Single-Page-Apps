import React from 'react';
import styled from 'styled-components';

export default function SearchForm(props) {
	const SearchNameForm = styled.section`
		margin: 0 auto;
	`;
	const Input = styled.input`
		font-size: 2rem;
		color: #3a606e;
		font-weight: 700;
		width: 100%;
		text-align: center;
		label {
			display: block;
			margin: 20px auto 5px auto;
		}
		input {
			width: 250px;
			padding: 15px;
			border-radius: 5px;
		}
	`;
	return (
		<section>
			<form>
				<label htmlFor="name">Find a Character</label>
				<input name="name" id="name" onChange={props.handleChange} />
			</form>
		</section>
	);
}
