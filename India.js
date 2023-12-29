
let result = '';
let ComputerMove = '';

function HT(move) {
  ComputerMove = Math.random ();

  if (ComputerMove < 0.2) {
    result = 'Heads'
    }
  else if (ComputerMove > 0.2 && ComputerMove <0.4) {
    result = "Tails"
    }
  else if (ComputerMove > 0.4 && ComputerMove <0.6) {
    result = "Heads"
    }
  else if (ComputerMove > 0.6 && ComputerMove < 0.8) {
    result = "Tails"
    }
  else if (ComputerMove > 0.8 && ComputerMove < 0.9999) {
    result = "Heads"
    }

  if (move === result) {
    console.log ('Your Guess was Right')
    score.Wins += 1
  }
  else {
    console.log ('Your guess Was Wrong')
    score.losses += 1
    }
  console.log(score)
  localStorage.setItem('scorekey', JSON.stringify(score))
}

let score = {
  Wins:0,
  losses:0
}

let stored_data = JSON.parse (localStorage.getItem('scorekey'));
console.log (stored_data);

