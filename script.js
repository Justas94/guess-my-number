"use strict";

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number! Try Again";
<<<<<<< HEAD

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";

    // When guess is too high
=======
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
>>>>>>> af25f047715f36591dfa42e563d24bdf637bbd55
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High! Try Again";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😕 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
<<<<<<< HEAD
    // When guess is too low
=======
>>>>>>> af25f047715f36591dfa42e563d24bdf637bbd55
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low! Try Again";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😕 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
