import { Component, createSignal } from 'solid-js';
import novussImage from './assets/images/novuss_transp.png';

const answers: string[] = [
	'Yes!',
	'Duh!',
	'Are you even asking?',
	'Certainly',
	'💯',
	'Go!',
	'Yes, of course!',
	'Fuck yes',
	"Don't you dare not to!",
	'As a wise man once said...YES!',
	'You already know the answer',
	"If you don't...I will find you and I will kill you",
];

const pickNewAnswer = (): string => {
	const randomIndex: number = Math.floor(Math.random() * answers.length);

	return answers[randomIndex];
};

const App: Component = () => {
	const [answer, setAnswer] = createSignal(pickNewAnswer());

	return (
		<div class='min-h-screen text-center flex items-center justify-center p-8'>
			<div class='space-y-6 uppercase'>
				<h3 class='text-4xl font-medium text-gray-600'>Should I Novuss Today?</h3>
				<img src={novussImage} alt='Novuss' width='450' height='450' class='mx-auto'></img>
				<h2 class='text-6xl font-extrabold'>{answer}</h2>
				<button class='text-xl text-gray-600' onClick={() => setAnswer(pickNewAnswer())}>
					Should I?
				</button>
			</div>
		</div>
	);
};

export default App;
