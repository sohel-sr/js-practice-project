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
const game = document.querySelector('#game');
minNum = document.querySelector('.min-num');
maxNum = document.querySelector('.max-num');
guessBtn = document.querySelector('#guess-btn');
guessInput = document.querySelector('#guess-input');
message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// PLAY AGAIN EVENT LISTENER
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

// LISTEN FOR GUESS
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // CHECK IF WON
  if (guess === winningNum) {

    // GAME OVER - WON
    gameOver(true, `${winningNum} is correct, YOU WON!`);

  } else {
    // WRONG NUMBER
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // GAME OVER - LOST
      gameOver(false, `Game Over, you lost. The correct number is ${winningNum}`)
    } else {
      // GAME CONTINUES - ANSWER WRONG

      // CHANGE BORDER COLOR
      guessInput.style.borderColor = 'red';

      // CLEAR INPUT
      guessInput.value = '';

      // TELL USER ITS WRONG NOUMBER
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }

  }
});



// GAME OVER
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  //Input disabled
  guessInput.disabled = true;

  // CHANGE BORDER COLOR
  guessInput.style.borderColor = color;

  // SET TEXT COLOR
  message.style.color = color;

  // SET MESSAGE
  setMessage(msg);

  // PLAY AGAIN
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// GET WINNING NUMBER
function getRandomNum(min, max){
  return (Math.floor(Math.random()*(max-min+1)+min));
}


// SET MESSAGE
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
