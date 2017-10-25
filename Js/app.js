const mainContainer = document.querySelector('.main-container');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const playAgainButton = document.createElement('button');
let missed = 0;


// hide overlay when pushing on the "Start game" button

const startButton = document.querySelector('.btn__reset');

startButton.addEventListener('click', () => {
	document.getElementById('overlay').remove();
});


// phrase array

const phrases = [
	'mike the frog', 
	'learn something today',
	'techdegree front end webdevelopment course',
	'you will never guess this tricky phrase',
	'happy coding'
	];


// Choose a random phrase and split it into characters

function getRandomPhraseArray(arr) {
const phrase = arr[Math.floor(Math.random() * arr.length)];
const split = phrase.split('');
   return split;
}

// Add phrases to display

function addPhraseToDisplay(arr) {
	for (let i = 0; i < arr.length; i++) {
			let phraseCharacters = arr[i];
			let ul = document.getElementById('phrase');
			let li = document.createElement('li');
			li.textContent = phraseCharacters;
			ul.appendChild(li);
			if (phraseCharacters === " " ) {
				li.className = 'space';
			} else {
				li.className = 'letter';
			}
	}
} 

// create a new overlay for the win or lose message

function newOverlay() {
		mainContainer.appendChild(div);
		div.appendChild(h1);
		playAgainButton.classList.add('play__again');
} 

const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);

// checkLetter function

const checkLetter = (button) => {

const phraseLetter = document.querySelectorAll('#phrase .letter')
	
	for (let i = 0; i < phraseLetter.length; i++) {
 			let guessedLetter = phraseLetter[i];
 			let showLetter = guessedLetter.textContent;
 			let buttonLetter = button.textContent;
 			
 			if ( showLetter == buttonLetter ) {
 				guessedLetter.classList.add('show');
 				var letterFound = guessedLetter;
 				} 
 			}
			
			if (letterFound) {
 				return letterFound;
 			} else {
 				return null;
 		}
}

// checkwin function

 const checkWin = () => {
		
		const shownLetters = document.querySelectorAll('.letter');
		const chosenLetters = document.querySelectorAll('.show');

	if (missed == 5) {
		newOverlay();
		div.id = 'lose';
		div.classList.add('lose');
		h1.textContent = 'You lose!';
		div.appendChild(playAgainButton).textContent = 'Try again';
		playAgainButton.addEventListener('click', () => {
			location.reload();
		});
	}

	if (shownLetters.length === chosenLetters.length) {
		newOverlay();
		div.id = 'win';
		div.classList.add('win');
		h1.textContent = 'You won!';
		div.appendChild(playAgainButton).textContent = 'Play again';
		playAgainButton.addEventListener('click', () => {
			location.reload();
		});
	}
 }

// add eventlistener keyboard keys

qwerty.addEventListener('click', (e) => { 
	if (e.target.tagName === 'BUTTON') { 
		let button = e.target;
		let letterFound = checkLetter(button);
		button.classList.add('chosen');
		button.disabled = true;
	if (letterFound == null){
		
		const ol = document.querySelector('ol');
		ol.removeChild(ol.getElementsByTagName('li')[0]);
		missed += 1;
	}
	checkWin();
	}
});
