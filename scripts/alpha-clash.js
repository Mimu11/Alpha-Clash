// function play() {
//     // // hidden home//
//     // const homeSection = document.getElementById('home-screen');
//     // homeSection.classList.add('hidden');

//     // // hide final Score//
//     // const finalScore = document.getElementById('final-score');
//     // finalScore.classList.add('hidden');

//     // // show playground//
//     // const playGroundSection = document.getElementById('playground-screen');
//     // playGroundSection.classList.remove('hidden');

//     // // show random alphabet//
//     // const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     // const alphabets = alphabetString.split('');
//     // const randomNumber = Math.random() * 25;
//     // const index = Math.round(randomNumber);
//     // const alphabet = alphabets[index];

//     // // show text//
//     // const currentAlphabet = document.getElementById('current-alphabet');
//     // currentAlphabet.innerText = alphabet;

//     // // background color//
//     // const element = document.getElementById(alphabet);
//     // element.classList.add('bg-orange-400');
// }

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
// // play game//
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
        // // get the current score//
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // // add score
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        //     // remove background//

        //     const removeBg = document.getElementById(currentAlphabet);
        //     removeBg.classList.remove('bg-orange-400');

        //     play();
    }
    else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();

        }
        // get the current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // reduce life if wrong press
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;

        //     if (newLife === 0) {
        //         const playgroundScreen = document.getElementById('playground-screen');
        //         playgroundScreen.classList.add('hidden');

        //         const finalScore = document.getElementById('final-score');
        //         finalScore.classList.remove('hidden');

        //         // show final score//

        //         const currentScoreElement = document.getElementById('current-score');
        //         const currentScoreText = currentScoreElement.innerText;
        //         const currentScore = parseInt(currentScoreText);
        //         const endScore = document.getElementById('last-score');
        //         endScore.innerText = currentScore;

        //         // reset new life
        //         const resetLife = document.getElementById('current-life');
        //         resetLife.innerText = 5;



        //         // reset new score
        //         const resetScore = document.getElementById('current-score');
        //         resetScore.innerText = 0;

        //         // clear last highlighted alphabet//
        //         const currentAlphabet = document.getElementById('current-alphabet');
        //         const text = currentAlphabet.innerText;
        //         const textValue = document.getElementById(text);
        //         textValue.classList.remove('bg-orange-400');

        //     }
        // }
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
