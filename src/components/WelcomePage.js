import React from 'react';

export default function WelcomePage(props) {
	return (
		<section className="welcome-page">
			<h2>The Philosophy of Rick & Morty</h2>
			<img
				src="https://upload.wikimedia.org/wikipedia/en/b/b0/Rick_and_Morty_characters.jpg"
				alt="Rick and Morty Family"
			/>
			<p className="credit">
				<a
					href="https://en.wikipedia.org/wiki/Rick_and_Morty"
					target="_blank"
					rel="noopener noreferrer"
				>
					Source: Rick & Morty - Wikipedia
				</a>
			</p>
			<p>
				Rick and Morty has been described as "a never-ending fart joke wrapped
				around a studied look into nihilism". The series addresses the
				insignificance of human existence as compared to the size of the universe,
				with no recognizable divine presence, as described by Lovecraft's philosophy
				of cosmicism. The characters of the show deal with cosmic horror and
				existential dread, either by asserting the utility of science over magic or
				by choosing a life in ignorant bliss.However, as Joachim Heijndermans of
				Geeks notes, none of them appear able to handle the absurd and chaotic
				nature of the universe, as Jerry gets by through denial, and Rick is a
				"depressed, substance-addicted, suicidal mess".
			</p>

			<p>
				Harmon describes Rick as a self-interested anarchist, who doesn't like being
				told what to do. He believes that the character's life on a larger scale has
				caused him mental illness, and opines that "the knowledge that nothing
				matters—while accurate—gets you nowhere". Matthew Bulger of The Humanist
				notes that the creators of the series are trying to communicate the message
				that we need to focus on human relationships and not preoccupy our minds
				with unanswerable questions, in order to find a sense of purpose and live a
				better life. Eric Armstrong of The New Republic notes that Morty represents
				the audience, as he is "mostly there to react to Rick's deranged schemes".
				The character is transformed by the truths he discovers during his
				interdimensional adventures with his grandfather. However, instead of
				sinking into depression, Morty accepts these truths that empower him to
				value his own life.
			</p>
		</section>
	);
}
