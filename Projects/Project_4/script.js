let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; // array that store previous guesses.
let Num = 1; // Num variable count total number of guesses.

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const number = parseInt(userInput.value);
        validateguess(number);
    })
}

function validateguess(guess) { // function for checking number is in our range or not.
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert(`Please enter a valid number`);
    } else {
        prevGuess.push(guess);
        if (Num === 11) {
            displayguess(guess);
            displaymessage(`Game Over & Random number was ${random}`);
            endGame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) { // function to check guessed number is right or not.
    if (guess === random) {
        displaymessage(`You guessed it right`);
        endGame();
    } else if (guess < random) {
        displaymessage(`Number is TOOO low`);
    } else if (guess > random) {
        displaymessage(`Number is TOOO High`);
    }
}

function displayguess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    Num++;
    remaining.innerHTML = `${11 - Num} `;
}

function displaymessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        random = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        Num = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - Num} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}
