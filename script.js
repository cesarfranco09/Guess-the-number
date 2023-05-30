'use strict';

//Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //if there's no value
  if (!guess) {
    displayMessage('No Number...');

    // When player wins
  } else if (guess === secretNumber) {

    displayMessage('Corret Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;

    if (score > highscore){
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is too high
  } else if (guess !== secretNumber){
    if (score > 1){
        displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
        score--;
        document.querySelector(".score").textContent = score;
    } else {
        displayMessage('YOU LOST!');
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#ff3333';
    }
  } 
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
