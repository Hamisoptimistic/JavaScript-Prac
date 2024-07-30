'use strict';

// selecting Elements

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')

// Initial value
let dice = 0;
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// rolling Dice

btnRoll.addEventListener('click', () => {
    //generating Random Number
    dice = Math.trunc((Math.random() * 6 + 1));

    // 2. Display Dice Img
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`

    // Check for 1
    if (dice !== 1) {
        // add score to current score
        currentScore = currentScore + dice
        // current0El.textContent = currentScore // not Dynamic
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore

    } else {
        // if it not one 
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0
        // activePlayer = 1

    }
})

