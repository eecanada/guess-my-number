'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = ' 🎉 Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23 

function eder(){
  document.querySelector('.guess').value = 23
}

function check(){
  document.querySelector('.message').textContent = ' 🎉 Correct Number!';

}

document.querySelector('.check').addEventListener('click', function (){
  let guess = document.querySelector('.guess').value 

  if(!guess){
    document.querySelector('.message').textContent = ' ⛔️ No Number!';
  } else {
    document.querySelector('.message').textContent =  guess ;
  }
})
