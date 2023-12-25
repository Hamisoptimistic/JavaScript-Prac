// ComputerMove Logic
let computermove = '';
function pickcomputerMove () {
  const randomnumber = Math.random();
   
  if (randomnumber >= 0 && randomnumber <= 0.3 ) {
      computerMove = 'Rock';
  }
  else if (randomnumber >= 0.3 && randomnumber <= 0.6){
      computerMove = "Paper";
  }
  else {
      computerMove = "Scissor";
  }
  return computermove;
}

// PlayerMove Logic
let result = '';

function playgame(playermove) {
  const computermove = pickcomputerMove();

  if (playermove === "Rock") {
    if (computerMove === "Rock") {
    result = 'Tie';
    }
    else if (computerMove === "Paper") {
      result = "You Lose";
    }
    else {
      result = 'You Win';
    }
  }
  else if (playermove === "Scissor") {
    if (computerMove === "Rock") {
      result = 'You Lose';
      }
      else if (computerMove === "Paper") {
        result = "You Win";
      }
      else {
        result = 'Tie';
      }
  }
  else {
    if (computerMove === "Rock") {
      result = 'You Lose';
      }
      else if (computerMove === "Paper") {
        result = "Tie";
      }
      else {
        result = 'You Win';
      }
  }

  alert (`You picked ${playermove} computer Picked ${computermove} ${result}`);

}

  

  
