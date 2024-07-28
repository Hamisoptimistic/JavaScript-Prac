'use strict';

let randNumber = Math.floor(Math.random() * 20);
// document.querySelector('.number').textContent = randNumber
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', () => {
    let inputValue = Number((document.querySelector('.guess').value));

    if (!inputValue) {
        document.querySelector('.message').textContent = 'Please Input a value'
        // Win 

    } else if (inputValue === randNumber) {
        document.querySelector('.message').textContent = "You Won correct Number"
        document.querySelector('body').style.backgroundColor = '#006400'
        document.querySelector('.number').textContent = randNumber
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }




    } else if (inputValue > randNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = "Too High📈"
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lost📈"
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'Crimson'
        }



    } else if (inputValue < randNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = "Too Low📉"
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lost📈"
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'Crimson'
        }

        // document.querySelector('.message').textContent = "Too Low📉"
        // score--;
        // document.querySelector('.score').textContent = score;
    }


})

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    randNumber = Math.floor(Math.random() * 20);
    document.querySelector('.number').textContent = '?'

    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    // document.querySelector('.highscore').textContent = highscore;

})







