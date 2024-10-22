function play() {
    // hidden home//
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    // show playground//

    const playGroundSection = document.getElementById('playground-screen');
    playGroundSection.classList.remove('hidden');

    // show random alphabet//
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];



    // show text//
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // background color//
    const element = document.getElementById(alphabet);
    element.classList.add('bg-orange-400');



}

// play game//
document.addEventListener('keyup', handleKeyboardButtonPressed)

function handleKeyboardButtonPressed(event) {
    const playerPressed = event.key;
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;


    // check right or wrong//

    if (playerPressed === currentAlphabet) {
        // score add//
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;

        // remove background//

        const removeBg = document.getElementById(currentAlphabet);
        removeBg.classList.remove('bg-orange-400');
        play();

    }
    else {
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
    }
}