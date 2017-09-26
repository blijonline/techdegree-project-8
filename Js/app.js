const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed;


// hide overlay when pushing on the "Start game" button

const startButton = document.querySelector('.btn__reset');

startButton.addEventListener('click', function() {
	document.getElementById('overlay').style.display = 'none';
});


// phrase array

const phrases = 
	['mike the frog', 
	'learn something today',
	'techdegree front end webdevelopment course',
	'you will never gruess this tricky phrase',
	'happy coding']


// Choose a random phrase and split it into characters

function getRandomPhraseArray(phrases) {
const phrase = phrases[Math.floor(Math.random() * phrases.length)];
const splitPhrase = phrase.split("");
return splitPhrase;
}



function addPhraseToDisplay() {
	const splittedPhrases = getRandomPhraseArray(phrases);
	
	for (let i = 0; i < splittedPhrases.length; i++) {
		let phraseLetters = splittedPhrases[i];
		if (phraseLetters !== ' ') {
			let ul = document.getElementById('phrase');
			let li = document.createElement('li');
			li.textContent = phraseLetters;
			ul.appendChild(li);
		} 
	}
} 

addPhraseToDisplay();