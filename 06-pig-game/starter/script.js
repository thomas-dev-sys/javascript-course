'use strict';

console.log('Pig Game Ready!');


// Game State Variables
let scores, currentScore, activePlayer, playing;

// Select player 0 (player 1)
const player0El = document.querySelector('.player--0');

// Select player 1 (player 2)
const player1El = document.querySelector('.player--1');

// Select score 0 element
const score0El = document.querySelector('#score--0');

// Select score 1 element
const score1El = document.querySelector('#score--1');

const current0El = document.getElementById('current--0');

const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnRollEl = document.querySelector('.btn--roll');

// Game initialization function

const init = function () {
    // Start with both players having zero total score
    scores = [0, 0];

    // Set current score to zero
    currentScore = 0;

    // Set active player to 0 (player 1)
    activePlayer = 0;

    playing = true;

    // Set all the display
    score0El.textContent = 0;

    score1El.textContent = 0;

    current0El.textContent = 0;

    current1El.textContent = 0;

    diceEl.classList.add('hidden');
};

init();

btnRollEl.addEventListener('click', function () {
    if (playing) {
        // Add dice logic
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');

        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;

            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Handle rolling a 1
            currentScore = 0;

            document.getElementById(`current--${activePlayer}`).textContent = 0;
        }
    }
});

