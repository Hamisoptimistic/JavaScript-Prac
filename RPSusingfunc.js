// ComputerMove Logic

let computerMove = '';
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
  return computerMove;
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

  if (result === 'You Win') {
    score.Wins = score.Wins + 1; 
  }
  else if (result === 'You Lose') {
    score.Losses += 1;
  }
  else if (result === 'Tie') {
    score.Ties += 1;
  }

  localStorage.setItem('score', JSON.stringify (score));

 

  alert (`You picked ${playermove} computer Picked ${computermove} ${result}
  Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`);

}

// Score

let score = {
  Wins:0, 
  Losses:0, 
  Ties:0
}

const savedScore = JSON.parse(localStorage.getItem('score'));
if (savedScore !== null) {
  score = savedScore;
}



console.log (score);

function resetscore () {
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;

  localStorage.removeItem('score')

}
