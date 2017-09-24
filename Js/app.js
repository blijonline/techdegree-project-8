const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed;


// hide overlay
const startButton = document.querySelector('.btn__reset');

startButton.addEventListener('click', function() {
	document.getElementById('overlay').style.display = 'none';
});
