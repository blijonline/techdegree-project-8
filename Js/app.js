const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed;


// hide overlay
const startButton = document.querySelector('.btn__reset');

startButton.addEventListener('click', function() {
	document.getElementById('overlay').style.display = 'none';
});


// phrase array

const phrases = 
	["mike the frog", 
	"learn something today",
	"techdegree front end webdevelopment course",
	"you will never gruess this tricky phrase",
	"happy coding"]

function getRandomPhraseAsArray() {
	
} 
				