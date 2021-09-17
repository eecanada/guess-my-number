'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = ' 🎉 Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23

let secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.number').textContent = secretNumber;

let score = (document.querySelector('.score').textContent = 20);

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔️ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🎉 Correct Number!';

    document.querySelector('.number').textContent = secretNumber;

    document.body.style.background = '#2BC20E';

    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📈 Too High!';

      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📉 Too Low!';

      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (score == 20) {
    document.querySelector('.message').textContent =
      'Cannot reset, start guessing!';
  } else {
    score = 20;
    document.querySelector('.score').textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = secretNumber;

    document.body.style.background = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.guess').value = ""
  }
});
