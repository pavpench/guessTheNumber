'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct secretNumber';
// document.querySelector('.secretNumber').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let button = document.querySelector('.check');
const againButton = document.querySelector('.again');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
againButton.addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

button.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //No input
  if (!guess) {
    displayMessage('No number added');
  }
  // When response is correct
  else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guess is differenct
  else if (guess !== secretNumber) {
    //When response is higher
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
    } else {
      displayMessage('You lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});
