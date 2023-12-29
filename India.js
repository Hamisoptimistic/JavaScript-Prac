
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
  }
  else {
    console.log ('Your guess Was Wrong')
  }
  console.log(ComputerMove)
}

