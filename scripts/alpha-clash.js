function continueGame() {
    // step-1 generate a random alphabet
    const alphabet = getRandomAlphabet();

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}
function play() {
    // show and hide
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    if (playerPressed === 'Escape') {
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;

    // // check right or wrong//
    if (playerPressed === currentAlphabet) {

        // start a new round
        removeBackgroundColorById(currentAlphabet);
        continueGame();
        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);

    }
    else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }
    }
}
function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
