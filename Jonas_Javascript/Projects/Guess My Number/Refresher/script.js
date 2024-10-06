// 'use strict';
// let a = document.getElementsByClassName('number');
// console.log(a[0].textContent);


// let b = document.querySelector('.number');
// console.log(b.textContent);

// Random Number
let randomNumber = Math.round(Math.random() * 20)
console.log(randomNumber)

// Score
let score = 20;
let highscore = 0
let stars = 0

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    if (guess) {
        if (guess === randomNumber) {
            document.querySelector('.message').textContent = "YOU WON";
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = 'green'
            document.querySelector('.number').textContent = randomNumber;

            // Implement star function
            if (score === 20) {
                stars = `⭐⭐⭐`;
            } else if (score === 19) {
                stars = `⭐⭐`;
            } else if (score === 18) {
                stars = `⭐`;
            }
            document.querySelector('.message').textContent = `YOU WON (${stars} stars)`;

            // HIGH-SCORE
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore
            }

        } else if (guess !== randomNumber) {
            if (score > 1) {
                if (guess < randomNumber) {
                    document.querySelector('.message').textContent = "Too Low";
                    score--;
                    document.querySelector('.score').textContent = score;
                }
                // greaterThan
                else if (guess > randomNumber) {
                    document.querySelector('.message').textContent = "Too high";
                    score--;
                    document.querySelector('.score').textContent = score
                }
            } else {
                document.querySelector('.message').textContent = "You Loose"
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = '#fa2a55'
            }
        }
    }
    else {
        document.querySelector('.message').textContent = "Please Enter a Valid Number"
    }
})

// AGAIN button
document.querySelector('.again').addEventListener('click', function () {
    randomNumber = Math.round(Math.random() * 20)
    console.log(randomNumber)

    // Score
    score = 20;
    highscore = 0;
    stars = 0; // Reset stars

    document.querySelector('.number').textContent = "?"
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;

})