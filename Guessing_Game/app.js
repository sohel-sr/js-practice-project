/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount of gueses
- Notify player of gueses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game value
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// Assaing UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event Listen
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  // Validation
if(isNaN(guess)){
  alert(`Please enter a number between ${min} and ${max}`);
}else{
  if(isNaN(guess) || guess < min || guess > max ){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
}

  // Check if won
  if (guess === winningNum) {

    // Game over - won
    gameOver(true, `${winningNum} is correct YOU WIN!`);
  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over  -lost
      gameOver(false, `Game over, you lost. The correct number was  ${winningNum} `)
    } else {
      // Game continues -answer wrong

      // change border color
      guessInput.style.borderColor = 'red';

      // Clear input
      guessInput.value = '';

      // Set message
      setMessage(`${guess} is not correct number, ${guessesLeft} guesses left`, 'red');
    }
  }
  });

// Game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);
  // play again
  guessBtn.value = 'play Again';
  guessBtn.className += 'play-again';
}
// Get winnig number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
