'use strict';

// DOM Element Selection
const messageEl = document.querySelector('.message');

// messageEl.textContent = "Hello from JavaScript!";

const scoreEl = document.querySelector('.score');
// scoreEl.textContent = "15";

const numberEl = document.querySelector('.number');
// numberEl.textContent = "10";

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = "18";

const guessInputEl = document.querySelector('.guess');
// guessInputEl.value = 6;

// Game State Variables

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log("Your secret number is ", secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

///////////////////////////
// Basic Game Logic

document.querySelector('.check').addEventListener('click', function () {
    console.log('Check button clicked!');
    const guess = Number(document.querySelector('.guess').value);
    console.log("Players guessed: ", guess);

    // Input validation
    if (!guess) {
        document.querySelector('.message').textContent = "Please input a number!";
        return; 
    }

    if (guess < 1 || guess > 20 || guess === 0) {
        document.querySelector('.message').textContent = "Number must be between 1 and 20";
        return;
    }

    if (guess === secretNumber) {
        console.log("Correct guess!");
        document.querySelector('.message').textContent = "✅ Correct Number";
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
        document.querySelector('.message').textContent = "🔥 You Won!";
        document.body.style.backgroundColor = 'green';
    } else if (guess > secretNumber) {
        console.log("Too high!!!");
        document.querySelector('.message').textContent = "😱 Too High!!!";
        score --;
        document.querySelector('.score').textContent = score;
        if (score < 1) {
            document.querySelector('.message').textContent = "Game Over! 😣 Please try again"
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
            document.body.style.backgroundColor = 'red';
            document.querySelector('.guess').value = '';
        }
    } else if (guess < secretNumber) {
        console.log("Too Low!!!");
        document.querySelector('.message').textContent = "😞 Too Low!!!";
        score --;
        document.querySelector('.score').textContent = score;
        if (score < 1) {
            document.querySelector('.message').textContent = "Game Over! 😣"
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
            document.body.style.backgroundColor = 'red';
            document.querySelector('.guess').value = '';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    // Block
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    // Restart secret number display
    document.querySelector('.number').textContent = "?";
    // Restart the score
    document.querySelector('.score').textContent = score;
    // Empty guess input value
    document.querySelector('.guess').value = "";
    // Enable guess and check input buttons
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
    document.body.style.backgroundColor = '';
});

