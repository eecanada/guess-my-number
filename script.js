'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = (document.querySelector('.score').textContent = 20);

let highScore = 0;

let labelScore = document.querySelector('.score').textContent;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage(' ⛔️ No Number!');
  } else if (guess === secretNumber) {
    displayMessage(' 🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.body.style.background = '#2BC20E';

    document.querySelector('.number').style.width = '30rem';

    if (labelScore > highScore) {
      let newHighScore = (document.querySelector('.highscore').textContent =
        score);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ' 📈 Too High!' : '📉 Too Low!');

      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 GAME OVER!');

      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (score == 20) {
    displayMessage('Cannot reset, start guessing!');
  } else {
    score = 20;
    document.querySelector('.score').textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('.number').textContent = '?';

    document.body.style.background = '#222';
    document.querySelector('.number').style.width = '15rem';

    displayMessage('Start guessing...');

    document.querySelector('.guess').value = '';

    highScore = newHighScore;
  }
});
