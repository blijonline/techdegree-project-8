// debugger;
const mainContainer = document.querySelector('.main-container');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const newOverlay = document.createElement('div');
const h1 = document.createElement('h1');
const playAgainButton = document.createElement('button');

;let missed = 0;


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
	'you will never gruess this tricky phrase',
	'happy coding'
	];


// Choose a random phrase and split it into characters

function getRandomPhraseArray(arr) {
const phrase = arr[Math.floor(Math.random() * arr.length)];
const split = phrase.split('');
   return split;
}



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


const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);



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

 const checkWin = () => {
		
		const shownLetters = document.querySelectorAll('.letter');
		const chosenLetters = document.querySelectorAll('.show');

		mainContainer.appendChild(newOverlay);
		newOverlay.appendChild(h1);
	
	if (missed == 5) {
		newOverlay.id = 'lose';
		newOverlay.classList.add('lose');
		h1.textContent = 'You lose!';
		playAgainButton.classList.add('play__again');
		newOverlay.appendChild(playAgainButton).textContent = 'Try again';
		playAgainButton.addEventListener('click', () => {
			location.reload();
		});
	}

	if (shownLetters.length === chosenLetters.length) {
		newOverlay.id = 'win';
		newOverlay.classList.add('win');
		h1.textContent = 'You won!';
		playAgainButton.classList.add('play__again');
		newOverlay.appendChild(playAgainButton).textContent = 'Play again';
		playAgainButton.addEventListener('click', () => {
			location.reload();
		});
	}
 }

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